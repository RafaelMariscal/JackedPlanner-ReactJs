import clsx from "clsx";
import { add, format, isEqual, isSameMonth, isToday, startOfDay, startOfMonth, startOfWeek, sub } from "date-fns";
import { eachDayOfInterval, endOfMonth, endOfWeek, parse } from "date-fns/esm";
import { useState } from "react";
import { ArrowIcon } from "../../../assets/icons/ArrowIcon";
import DashboardCard from "../DashboardCard";


export function Calendar() {
  let today = startOfDay(new Date());
  const [SelectedDay, setSelectedDay] = useState(today);
  const [CurrentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firsDayOfCurrentMonth = parse(CurrentMonth, 'MMM-yyyy', new Date());


  let newDays = eachDayOfInterval({
    start: startOfWeek(firsDayOfCurrentMonth),
    end: endOfWeek(endOfMonth(firsDayOfCurrentMonth))
  });


  function handleMonth(m: number) {
    if (m > 0) {
      let firsDayOfNextMonth = add(firsDayOfCurrentMonth, { months: 1 });
      return setCurrentMonth(format(firsDayOfNextMonth, 'MMM-yyyy'))
    }
    let firsDayOfPrevMonth = sub(firsDayOfCurrentMonth, { months: 1 });
    return setCurrentMonth(format(firsDayOfPrevMonth, 'MMM-yyyy'))
  }

  return (
    <DashboardCard title="Calendar:" className="w-full" extend>
      <div className="w-full h-full min-w-[236px] text-sm leading-tight">
        <div className="flex items-center justify-between">
          <p className=" text-gray-100">
            {format(firsDayOfCurrentMonth, 'MMMM yyyy')}
          </p>

          <div className="flex gap-0  ">
            <button type="button"
              onClick={() => handleMonth(-1)}
              className="flex items-center justify-center p-1 rounded 
              cursor-pointer hover:bg-gray-400 [&_*]:hover:stroke-gray-800
              "
            >
              <ArrowIcon className="[&_path]:stroke-gray-100 scale-50" />
            </button>

            <button type="button"
              onClick={() => handleMonth(1)}
              className="flex items-center justify-center p-1 rounded 
              cursor-pointer hover:bg-gray-400 [&_*]:hover:stroke-gray-800
              "
            >
              <ArrowIcon className="[&_path]:stroke-gray-100 scale-50 rotate-180" />
            </button>
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
          {newDays.map((day, dayIndex) => (
            <div key={day.toString()}
              className={clsx(
                "",
                {}
              )}
            >
              <button type="button"
                onClick={() => setSelectedDay(day)}
                className={clsx(
                  "w-6 h-6 mt-[.625rem] border border-transparent transition-colors duration-100",
                  isEqual(day, SelectedDay) && 'text-gray-800 bg-orange-500',
                  !isEqual(day, SelectedDay) &&
                  isToday(day) && 'text-orange-500',
                  !isEqual(day, SelectedDay) && !isToday(day) &&
                  isSameMonth(day, firsDayOfCurrentMonth) && 'text-gray-100',
                  !isEqual(day, SelectedDay) && !isToday(day) &&
                  !isSameMonth(day, firsDayOfCurrentMonth) && 'text-gray-400',
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
          ))}
        </div>
      </div>
    </DashboardCard>
  )
}
