import { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
import { ScheduleLabel } from "../../../../@types/PlannerProps";


interface ScheduleDaysSelectorProps {
  SplitsQuantity: number
  RestsQuantity: number
  DaysOptions: ScheduleLabel[][]
  setDaysOptions: React.Dispatch<React.SetStateAction<ScheduleLabel[][]>>
}

const scheduleLabels: ScheduleLabel[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

export function ScheduleDaysSelector({ SplitsQuantity, RestsQuantity, DaysOptions, setDaysOptions }: ScheduleDaysSelectorProps) {
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

  return (
    <>
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
    </>
  );
}
