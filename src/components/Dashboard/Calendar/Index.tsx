import clsx from "clsx";
import { format, isEqual, isSameMonth, isToday, startOfDay, startOfMonth, startOfWeek } from "date-fns";
import { eachDayOfInterval, endOfMonth, endOfWeek } from "date-fns/esm";
import { useState } from "react";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";
import DashboardCard from "../DashboardCard";


// contrua a lógica de um calendário

export function Calendar() {
  let today = startOfDay(new Date());
  const [SelectedDay, setSelectedDay] = useState(today);
  let newDays = eachDayOfInterval({
    start: startOfWeek(startOfMonth(today)),
    end: endOfWeek(endOfMonth(today))
  });

  return (
    <DashboardCard title="Calendar:" className="w-full" extend>
      <div className="w-full h-full min-w-[236px] text-sm leading-tight">
        <div className="flex items-center justify-between">
          <p className=" text-gray-100">
            {format(today, 'MMMM yyyy')}
          </p>

          <div className="flex gap-4">
            <div className="flex items-center justify-center p-1 rounded cursor-pointer hover:bg-gray-400">
              <ArrowIcon className="[&_path]:stroke-gray-100 scale-75" />
            </div>

            <div className="flex items-center justify-center p-1 rounded cursor-pointer hover:bg-gray-400">
              <ArrowIcon className="[&_path]:stroke-gray-100 scale-75 rotate-180" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 font-semibold mt-4">
          <span className="text-orange-500 w-full h-5 flex items-center justify-center">
            S
          </span>
          <span className="text-orange-500 w-full h-5 flex items-center justify-center">
            M
          </span>
          <span className="text-orange-500 w-full h-5 flex items-center justify-center">
            T
          </span>
          <span className="text-orange-500 w-full h-5 flex items-center justify-center">
            W
          </span>
          <span className="text-orange-500 w-full h-5 flex items-center justify-center">
            T
          </span>
          <span className="text-orange-500 w-full h-5 flex items-center justify-center">
            F
          </span>
          <span className="text-orange-500 w-full h-5 flex items-center justify-center">
            S
          </span>
        </div>

        <div className="grid grid-cols-7 place-items-center">
          {
            newDays.map((day, dayIndex) => (
              <div key={day.toString()}
                className={clsx(
                  "",
                  {}
                )}
              >
                <button type="button"
                  onClick={() => setSelectedDay(day)}
                  className={clsx(
                    "w-6 h-6 mt-3 border border-transparent transition-colors duration-100",
                    isEqual(day, SelectedDay) && 'text-gray-800 bg-orange-500',

                    !isEqual(day, SelectedDay) &&
                    isToday(day) && 'text-orange-500',

                    !isEqual(day, SelectedDay) && !isToday(day) &&
                    isSameMonth(day, today) && 'text-gray-100',

                    !isEqual(day, SelectedDay) && !isToday(day) &&
                    !isSameMonth(day, today) && 'text-gray-400',

                    isEqual(day, SelectedDay) &&
                    isToday(day) && 'bg-cyan-500',

                    isEqual(day, SelectedDay) &&
                    !isToday(day) && 'bg-cyan-500',

                    !isEqual(day, SelectedDay) &&
                    'hover:bg-gray-200 hover:text-gray-800 hover:font-semibold',

                    (isEqual(day, SelectedDay) || isToday(day)) &&
                    'font-semibold',
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>
              </div>
            ))
          }
        </div>

      </div>

    </DashboardCard>
  )
}
