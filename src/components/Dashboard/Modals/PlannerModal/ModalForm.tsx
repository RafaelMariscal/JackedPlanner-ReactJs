import { Timestamp } from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { FormEvent, useState } from "react";
import { PlannerProps, ScheduleLabel } from "../../../../@types/PlannerProps";
import { useUserContext } from "../../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../../Pages/Dashboard";
import { Button } from "../../../LoginPage/Button";
import { SplitsInputsControllers } from "./SplitsInputsControllers";
import { ScheduleDaysSelector } from "./ScheduleDaysSelector";
import { SplitNameInput } from "./SplitNameInput";

interface ModalFormProps {
  planner: PlannerProps | undefined
}
const scheduleLabels: ScheduleLabel[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

export function ModalForm({ planner }: ModalFormProps) {
  const { isLoading } = useUserContext();
  const { PlannerSelected } = useOutletDataContext();

  const [PlannerNameInput, setPlannerNameInput] = useState<string>(() => {
    if (planner) {
      return planner.name;
    } else {
      return "";
    }
  });
  const [SplitsQuantity, setSplitsQuantity] = useState(() => {
    if (planner && PlannerSelected) {
      const splitsWithoutRestDay = PlannerSelected.splits.filter(split => {
        return split.splitLabel !== "rest";
      });
      return splitsWithoutRestDay.length;
    } else {
      return 1;
    }
  });
  const [RestsQuantity, setRestsQuantity] = useState(() => {
    if (planner && PlannerSelected) {
      const RestDays = PlannerSelected.splits.filter(split => {
        return split.splitLabel === "rest";
      });
      return RestDays.length;
    } else {
      return 0;
    }
  });
  const [DaysOptions, setDaysOptions] = useState<ScheduleLabel[][]>(() => {
    if (planner && PlannerSelected) {
      const splitOptions = PlannerSelected.splits.map(split => {
        return split.splitLabel;
      });
      const schedule = PlannerSelected.schedule.map(day => {
        return splitOptions;
      });
      return schedule;
    } else {
      return [["a"]];
    }
  });
  const [StartDate, setStartDate] = useState(() => {
    if (planner && PlannerSelected) {
      const timestamp = PlannerSelected.startDate;
      const date = new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
      console.log(date);
      return date;
    } else {
      return new Date();
    }
  });
  const splitsLabels = scheduleLabels.filter((label, i) => {
    if (SplitsQuantity && i < SplitsQuantity) {
      return true;
    }
  });

  const DateDefaultValue = `${StartDate.getFullYear()}-${StartDate.getMonth()}-${StartDate.getDate()}`;

  const handleCreateNewPlanner = async (e: FormEvent) => {
    e.preventDefault();
    return;
  };

  return (
    <form onSubmit={handleCreateNewPlanner} className="
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
      <label htmlFor="plannerName">
        <span className="ml-1">Planner Name:</span>
        <input type="text" name="plannerName" id="plannerName"
          placeholder="Planner name..." className="pl-4" required
          value={PlannerNameInput} onChange={(e) => setPlannerNameInput(e.target.value)}
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
          key={uuidV4()}
          planner={planner}
          label={label}
        />
      ))}

      <ScheduleDaysSelector
        SplitsQuantity={SplitsQuantity}
        RestsQuantity={RestsQuantity}
        DaysOptions={DaysOptions}
        setDaysOptions={setDaysOptions}
      />

      <label htmlFor="Date">
        <span className="ml-1">
          Start Date
          <span className="text-orange-500 font-medium">
            {" \"mm/dd/yyyy\" "}
          </span>
          :
        </span>
        <input type="date" name="Date" id="Date" required
          className="p-4 select-none" defaultValue={DateDefaultValue}
          onChange={(e) => {
            const dateParsed = e.target.value.split("-");
            const dateSelected = new Date(
              Number(dateParsed[0]),
              Number(dateParsed[1]),
              Number(dateParsed[2])
            );
            setStartDate(dateSelected);
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
