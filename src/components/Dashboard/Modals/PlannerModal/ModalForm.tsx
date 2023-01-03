import { Timestamp } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { PlannerProps, ScheduleLabel } from "../../../../@types/PlannerProps";
import { useUserContext } from "../../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../../Pages/Dashboard";
import { Button } from "../../../LoginPage/Button";
import { SplitsInputsControllers } from "./SplitsInputsControllers";
import { ScheduleDaysSelector } from "./ScheduleDaysSelector";
import { SplitNameInput } from "./SplitNameInput";
import { format } from "date-fns";

interface ModalFormProps {
  planner: PlannerProps | undefined
}
const scheduleLabels: ScheduleLabel[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

export function ModalForm({ planner }: ModalFormProps) {
  const { isLoading } = useUserContext();
  const { PlannerSelected } = useOutletDataContext();

  const [PlannerNameInput, setPlannerNameInput] = useState<string>("");
  const [SplitsQuantity, setSplitsQuantity] = useState(1);
  const [RestsQuantity, setRestsQuantity] = useState(0);
  const [DaysOptions, setDaysOptions] = useState<ScheduleLabel[][]>([["a"]]);
  const [StartDate, setStartDate] = useState(new Date());
  const splitsLabels = scheduleLabels.filter((label, i) => {
    if (SplitsQuantity && i < SplitsQuantity) {
      return true;
    }
  });

  useEffect(() => {
    if (planner && PlannerSelected) {
      const splitsWithoutRestDay = PlannerSelected.splits.filter(
        split => split.splitLabel !== "rest"
      );
      const RestDays = PlannerSelected.splits.filter(
        split => split.splitLabel === "rest"
      );
      const splitOptions = PlannerSelected.splits.map(split => split.splitLabel);
      const schedule = PlannerSelected.schedule.map(day => splitOptions);
      const timestamp = PlannerSelected.startDate;
      const date = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();

      setPlannerNameInput(planner.name);
      setSplitsQuantity(splitsWithoutRestDay.length);
      setRestsQuantity(RestDays.length);
      setDaysOptions(schedule);
      setStartDate(date);
    }
    return;
  }, [planner, PlannerSelected]);

  const handleCreateNewPlanner = async (event: FormEvent) => {
    event.preventDefault();
    if (planner) {
      console.log("update planner");
    } else {
      console.log("create planner");
    }
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
        splitsQuantity={SplitsQuantity}
        setSplitsQuantity={setSplitsQuantity}
        restsQuantity={RestsQuantity}
        setRestsQuantity={setRestsQuantity}
      />

      {splitsLabels.map(label => (
        <SplitNameInput
          key={label}
          planner={planner}
          label={label}
        />
      ))}

      <ScheduleDaysSelector
        planner={planner}
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
            dateSelected ? setStartDate(dateSelected) : null;
          }}
        />
      </label>

      <Button size="custom" variant="orange" login
        className="mt-2 outline-none focus:outline-orange-500 focus:outline-1"
      >
        <button className="text-sm disabled:bg-orange-700" disabled={isLoading}>
          Create new planner
        </button>
      </Button>
    </form>
  );
}
