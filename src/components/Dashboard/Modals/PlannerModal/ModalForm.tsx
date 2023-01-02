import { Timestamp } from "firebase/firestore";
import { v4 as uuidV4 } from "uuid";
import { FormEvent, useEffect, useState } from "react";
import { PlannerProps, ScheduleLabel } from "../../../../@types/PlannerProps";
import { ArrowIcon } from "../../../../assets/icons/ArrowIcon";
import { useUserContext } from "../../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../../Pages/Dashboard";
import { Button } from "../../../LoginPage/Button";

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
  const splitsRest: "rest"[] = [];
  for (let i = 0; i < RestsQuantity; i++) {
    splitsRest.push("rest");
  }
  const scheduleOptions: ScheduleLabel[] = [...splitsLabels, ...splitsRest];
  if (DaysOptions.length === 0) {
    setDaysOptions([scheduleOptions]);
  }

  const DateDefaultValue = `${StartDate.getFullYear()}-${StartDate.getMonth()}-${StartDate.getDate()}`;

  useEffect(() => {
    const currentScheduleOptions = [...DaysOptions];
    if (currentScheduleOptions.length === 0) {
      setDaysOptions([scheduleOptions]);
    }
    const updatedScheduleOptions = currentScheduleOptions.map(day => {
      return scheduleOptions;
    });
    setDaysOptions(updatedScheduleOptions);
  }, [SplitsQuantity, RestsQuantity]);


  function handleQuantity(state: "split" | "rest", action: "acc" | "dec") {
    if (state === "split") {
      let updatedState = SplitsQuantity;
      action === "acc" ? updatedState += 1 : updatedState -= 1;
      const min = 1;
      const max = 10;
      const validatedValue = Math.max(min, Math.min(max, Number(updatedState)));

      return setSplitsQuantity(validatedValue);
    } else {
      let updatedState = RestsQuantity;
      action === "acc" ? updatedState += 1 : updatedState -= 1;
      const min = 0;
      const max = 10;
      const validatedValue = Math.max(min, Math.min(max, Number(updatedState)));
      return setRestsQuantity(validatedValue);
    }
  }

  function handleSplitDaysAmount(action: "add" | "dec") {
    if (action === "add") {
      setDaysOptions(prev => {
        if (prev.length < 12) return [...prev, scheduleOptions];
        return prev;
      });
    } else {
      setDaysOptions(prev => {
        if (prev.length > 1) return prev.filter((opt, i) => i !== prev.length - 1);
        return prev;
      });
    }
  }

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

      <div>
        <div className="flex gap-3 items-end">
          <div className="flex flex-col text-sm gap-1 text-gray-100 text-center">
            <span>Qty of <span className="text-orange-500 font-medium">Splits</span> :</span>
            <div className="bg-gray-100 h-10 rounded-lg flex items-center justify-center relative">
              <span className="text-gray-800 font-semibold">{SplitsQuantity}</span>
              <div className="flex flex-col absolute right-1">
                <button
                  type="button"
                  className="[&_path]:hover:stroke-orange-500"
                  onClick={() => handleQuantity("split", "acc")}
                >
                  <ArrowIcon className="[&_path]:stroke-gray-800 scale-50" />
                </button>
                <button
                  type="button"
                  className="[&_path]:hover:stroke-orange-500"
                  onClick={() => handleQuantity("split", "dec")}
                >
                  <ArrowIcon className="[&_path]:stroke-gray-800 scale-50 rotate-180" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-sm gap-1 text-gray-100 text-center">
            <span><span className="text-orange-500 font-medium">Rest Days</span> :</span>
            <div className="bg-gray-100 h-10 rounded-lg flex items-center justify-center relative">
              <span className="text-gray-800 font-semibold">{RestsQuantity}</span>
              <div className="flex flex-col absolute right-1">
                <button
                  type="button"
                  className="[&_path]:hover:stroke-orange-500"
                  onClick={() => handleQuantity("rest", "acc")}
                >
                  <ArrowIcon className="[&_path]:stroke-gray-800 scale-50" />
                </button>
                <button
                  type="button"
                  className="[&_path]:hover:stroke-orange-500"
                  onClick={() => handleQuantity("rest", "dec")}
                >
                  <ArrowIcon className="[&_path]:stroke-gray-800 scale-50 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {splitsLabels.map(label => (
        <label
          key={uuidV4()}
          htmlFor={`split${label}`}
        >
          <span className="ml-1">
            Name for split
            <span className="text-orange-500 font-medium">
              {` "${label}" `}
            </span>
            :
          </span>
          <input type="text" name="SpltX" id="SpltX"
            placeholder="Split name..." className="pl-4" required
          />

          {/*
          IT NEEDS A INPLEMENTATIONS OF HOW TO DEAL WITH THESE STATES
      */}
        </label>
      ))}

      <label htmlFor="SplitSchedule">
        <div className="grid grid-cols-5 gap-1">

          {DaysOptions.map((day, i) => {
            return (
              <label
                key={uuidV4()}
                htmlFor="Day1"
                className="text-center">
                <span>Day
                  <span className="text-orange-500 font-medium">
                    {` ${i + 1}`}
                  </span>
                </span>

                <select id="Day1" name="Day1"
                  className="w-14 h-10 rounded-md text-gray-800 font-semibold [&_option]:font-semibold"
                >
                  {day.map(option => (
                    <option
                      key={uuidV4()}
                      value={`split${option}`}
                      className="text-center"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            );
          })}
        </div>
      </label>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => handleSplitDaysAmount("add")}
          className="
        w-full h-10 rounded-lg text-gray-100 text-sm
        border-2 border-cyan-500 shadow-[0_0_.25rem_#72D6FD]
        transition-all duration-150 hover:shadow-[0_0_.5rem_#72D6FD]
      "
        >
          Add new day
        </button>

        <button
          type="button"
          onClick={() => handleSplitDaysAmount("dec")}
          className="
        w-full h-10 rounded-lg text-gray-100 text-sm
        border-2 border-red shadow-[0_0_.25rem_#FF463A]
        transition-all duration-150 hover:shadow-[0_0_.5rem_#FF463A]
      "
        >
          Remove last day
        </button>
      </div>

      <label htmlFor="SpltX">
        <span className="ml-1">
          Start Date
          <span className="text-orange-500 font-medium">
            {" \"mm/dd/yyyy\" "}
          </span>
          :
        </span>
        <input type="date" name="SpltX" id="SpltX" required
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
