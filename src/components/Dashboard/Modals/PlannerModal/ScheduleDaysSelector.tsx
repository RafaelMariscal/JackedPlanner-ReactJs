import { useEffect, Dispatch, SetStateAction } from "react";
import { v4 as uuidV4 } from "uuid";
import { PlannerProps, ScheduleLabel } from "../../../../@types/PlannerProps";

interface ScheduleDaysSelectorProps {
  planner: PlannerProps | undefined
  SplitsQuantity: number
  RestsQuantity: number
  DaysOptions: ScheduleLabel[][]
  setDaysOptions: Dispatch<SetStateAction<ScheduleLabel[][]>>
  plannerSchedule: ScheduleLabel[]
  setPlannerSchedule: React.Dispatch<React.SetStateAction<ScheduleLabel[]>>
}

const scheduleLabels: ScheduleLabel[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

export function ScheduleDaysSelector({
  planner, SplitsQuantity, RestsQuantity,
  DaysOptions, setDaysOptions, plannerSchedule, setPlannerSchedule
}: ScheduleDaysSelectorProps) {

  const splitsLabels = scheduleLabels.filter((label, i) => SplitsQuantity && i < SplitsQuantity);
  const splitsRest: "rest"[] = [];
  for (let i = 0; i < RestsQuantity; i++) {
    splitsRest.push("rest");
  }
  const scheduleOptions: ScheduleLabel[] = [...splitsLabels, ...splitsRest];

  useEffect(() => {
    const currentScheduleOptions = [...DaysOptions];
    if (currentScheduleOptions.length === 0) {
      setDaysOptions([scheduleOptions]);
    }
    const updatedScheduleOptions = currentScheduleOptions.map(() => scheduleOptions);
    setDaysOptions(updatedScheduleOptions);
  }, [SplitsQuantity, RestsQuantity]);

  function handleSplitDaysAmount(action: "add" | "dec") {
    if (action === "add") {
      setDaysOptions(prev => {
        if (prev.length < 12) return [...prev, scheduleOptions];
        return prev;
      });
      const label = planner && plannerSchedule.length < planner.schedule.length ?
        planner.schedule[plannerSchedule.length] : "a";
      const newSchedule = [...plannerSchedule, label];
      setPlannerSchedule(newSchedule);
    } else {
      setDaysOptions(prev => {
        if (prev.length > 1) return prev.filter((opt, i) => i !== prev.length - 1);
        return prev;
      });
      const newSchedule = plannerSchedule.filter((label, i, array) => i !== array.length - 1);
      setPlannerSchedule(newSchedule);
    }
  }

  function handleScheduleChange(value: ScheduleLabel, index: number) {
    const updatedPlannerSchedule = plannerSchedule.map((label, i) => {
      if (i === index) {
        return value;
      } else {
        return label;
      }
    });
    setPlannerSchedule(updatedPlannerSchedule);
  }
  return (
    <>
      <div className="grid grid-cols-5 gap-1">
        {DaysOptions.map((day, i) => {
          const selectedOption = plannerSchedule[i];
          return (
            <label
              key={uuidV4()}
              htmlFor={`Day${i + 1}`}
              className="text-center">
              <span>Day
                <span className="text-orange-500 font-medium">
                  {` ${i + 1}`}
                </span>
              </span>

              <select
                id={`Day${i + 1}`}
                className="
                  w-14 h-10 rounded-md text-gray-800 cursor-pointer
                  font-semibold [&_option]:font-semibold
                "
                value={selectedOption}
                onChange={(e) => handleScheduleChange(e.target.value as ScheduleLabel, i)}
              >
                {day.map(options => {
                  return (
                    <option
                      key={uuidV4()}
                      value={options}
                      className="text-center"
                    >
                      {options}
                    </option>
                  );
                })}
              </select>
            </label>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => handleSplitDaysAmount("add")}
          className="
            w-full h-10 rounded-lg text-gray-100 text-sm select-none
            border-2 border-cyan-500 shadow-[0_0_.25rem_#72D6FD]
            hover:shadow-[0_0_.5rem_#72D6FD] hover:backdrop-brightness-90
            transition-all duration-150
          "
        >
          Add new day
        </button>

        <button
          type="button"
          onClick={() => handleSplitDaysAmount("dec")}
          className="
            w-3/4 h-10 rounded-lg text-gray-100 text-sm select-none
            border-2 border-dark-red shadow-[0_0_.25rem_#CC1307]
            hover:shadow-[0_0_.75rem_#EE3529] hover:backdrop-brightness-90
            transition-all duration-150
          "
        >
          Remove day
        </button>
      </div>
    </>
  );
}
