import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Timestamp } from "firebase/firestore";
import { PlannerProps, ScheduleLabel, SplitProps, UserPlannersProps } from "../../../../@types/PlannerProps";
import { useUserContext } from "../../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../../Pages/Dashboard";
import { Button } from "../../../LoginPage/Button";
import { SplitsInputsControllers } from "./SplitsInputsControllers";
import { ScheduleDaysSelector } from "./ScheduleDaysSelector";
import { SplitNameInput } from "./SplitNameInput";
import { format, isValid } from "date-fns";

interface ModalFormProps {
  planner: PlannerProps | undefined
  plannerIndex: 1 | 2 | 3
}

export interface SplitInfoProps {
  id: string
  label: ScheduleLabel;
  splitTitle: string | undefined;
}

export const scheduleLabels: ScheduleLabel[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

export function ModalForm({ planner, plannerIndex }: ModalFormProps) {
  const { isLoading, Planners, setPlanners } = useUserContext();
  const { PlannerSelected } = useOutletDataContext();

  const [PlannerNameInput, setPlannerNameInput] = useState<string>("");
  const [SplitsQuantity, setSplitsQuantity] = useState(1);
  const [RestsQuantity, setRestsQuantity] = useState(0);
  const [DaysOptions, setDaysOptions] = useState<ScheduleLabel[][]>([["a"]]);
  const [plannerSchedule, setPlannerSchedule] = useState<(ScheduleLabel)[]>(["a"]);
  const [StartDate, setStartDate] = useState(new Date());
  const [SplitsInfo, setSplitsInfo] = useState<SplitInfoProps[]>([
    { id: uuidV4(), label: "a", splitTitle: "" }
  ]);

  useEffect(() => {
    if (planner && PlannerSelected) {
      const splitsWithoutRestDay = PlannerSelected.splits.filter(
        split => split.splitLabel !== "rest"
      );
      const RestDays = PlannerSelected.splits.filter(
        split => split.splitLabel === "rest"
      );
      const splitsLabels = scheduleLabels.filter(
        (label, i) =>
          i < splitsWithoutRestDay.length
      );
      const UpdatedSplitInfo = splitsLabels.map(label => {
        const split = planner.splits.find(split => split.splitLabel === label);
        return { id: uuidV4(), label, splitTitle: split?.splitTitle };
      });

      const splitOptions = PlannerSelected.splits.map(split => split.splitLabel);
      const schedule = PlannerSelected.schedule.map(day => splitOptions);
      const timestamp = PlannerSelected.startDate;
      const date = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();

      setPlannerNameInput(planner.name);
      setSplitsQuantity(splitsWithoutRestDay.length);
      setRestsQuantity(RestDays.length);
      setSplitsInfo(UpdatedSplitInfo);
      setPlannerSchedule(planner.schedule);
      setDaysOptions(schedule);
      setStartDate(date);
    }
    return;
  }, [planner, PlannerSelected]);

  const handleCreateNewPlanner = async (event: FormEvent) => {
    event.preventDefault();
    if (planner) {
      const updatedSplits = planner.splits.map(split => {
        const currentSplitInfo = SplitsInfo.find(splitInfo => splitInfo.label === split.splitLabel);
        if (currentSplitInfo !== undefined && currentSplitInfo.splitTitle !== undefined) {
          const updatedSplit: SplitProps = { ...split, splitTitle: currentSplitInfo.splitTitle };
          return updatedSplit;
        } else {
          return split;
        }
      });
      const plannerToBeUpdated: PlannerProps = {
        ...planner,
        name: PlannerNameInput,
        splits: updatedSplits,
        schedule: plannerSchedule,
        startDate: Timestamp.fromDate(StartDate)
      };
      console.log(plannerToBeUpdated);
    } else {
      const plannerToBeUpdated = {
        name: PlannerNameInput,
        splitsInfo: SplitsInfo,
        schedule: plannerSchedule,
        startDate: Timestamp.fromDate(StartDate)
      };
      console.log(plannerToBeUpdated);

    }

    // const updatedPlanners: UserPlannersProps = { ...Planners };

    return;
  };

  return (
    <form onSubmit={(event) => handleCreateNewPlanner(event)} className="
    w-full flex flex-col gap-4

    [&_input]:h-10 [&_input]:rounded-md [&_input]:bg-gray-100
    [&_input]:text-gray-800 [&_input]:text-sm [&_input]:font-medium
    [&_input]:outline-none focus:[&_input]:outline-1
    focus:[&_input]:outline-orange-500
    focus:[&_input]:outline-offset-2

    [&_label]:flex [&_label]:flex-col [&_label]:gap-1
    [&_label]:text-gray-100 [&_label]:text-sm
  "
    >
      <label>
        <span className="ml-1">Planner Name:</span>
        <input
          type="text"
          placeholder="Planner name..."
          className="pl-4"
          required
          value={PlannerNameInput}
          onChange={(e) => setPlannerNameInput(e.target.value)}
        />
      </label>

      <SplitsInputsControllers
        planner={planner}
        splitsQuantity={SplitsQuantity}
        setSplitsQuantity={setSplitsQuantity}
        restsQuantity={RestsQuantity}
        setRestsQuantity={setRestsQuantity}
        setSplitsInfo={setSplitsInfo}
      />

      {SplitsInfo.map((split, index) => (
        <SplitNameInput
          key={split.id}
          label={split.label}
          splitTitle={split.splitTitle}
          setSplitsInfo={setSplitsInfo}
        />
      ))}

      <ScheduleDaysSelector
        planner={planner}
        plannerSchedule={plannerSchedule}
        setPlannerSchedule={setPlannerSchedule}
        SplitsQuantity={SplitsQuantity}
        RestsQuantity={RestsQuantity}
        DaysOptions={DaysOptions}
        setDaysOptions={setDaysOptions}
      />

      <label>
        <span className="ml-1">
          <span className="text-orange-500 font-medium">
            {"Start Date "}
          </span>
          :
        </span>
        <input
          type="date"
          required
          className="p-4 select-none"
          value={format(StartDate, "yyyy-MM-dd")}
          onChange={(e) => {
            const dateParsed = e.target.value.split("-");
            const dateSelected = new Date(
              Number(dateParsed[0]),
              Number(dateParsed[1]) - 1,
              Number(dateParsed[2])
            );
            isValid(dateSelected) ? setStartDate(dateSelected) : null;
          }}
        />
        <span className="text-[10px] text-gray-200 mt-1">
          {"If date doesn't change, it means that it returns an invalid date."}
        </span>
      </label>

      <Button size="custom" variant="orange" login
        className="mt-2 outline-none focus:outline-orange-500 focus:outline-1"
      >
        <button className="text-sm disabled:bg-orange-700" disabled={isLoading}>
          {planner ? "Udpate Planner" : "Create new account"}
        </button>
      </Button>
    </form>
  );
}
