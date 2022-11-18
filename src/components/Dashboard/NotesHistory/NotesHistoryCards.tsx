import clsx from "clsx";
import { useId } from "react";

type dateObject = {
  date: Date;
  splitDay: string;
}

interface NotesHistoryCardsProps {
  month: string;
  dates: dateObject[];
  selected?: boolean
}

const MonthsLabels = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

export function NotesHistoryCards({ month, dates, selected = false }: NotesHistoryCardsProps) {
  const monthIndex = MonthsLabels.indexOf(month);
  const datesIncluded = dates.filter(date => date.date.getMonth() === monthIndex);
  return (
    <>
      {
        datesIncluded.map((dateObj) => {
          return (
            <div key={useId()} className={clsx(
              "h-9 pl-4 rounded-md font-medium flex items-center justify-start",
              {
                "bg-cyan-500": selected === true,
                "bg-gray-100": selected === false,
              }
            )}>
              <div className="w-[11ch] flex justify-between">
                <span className="tracking-wide">
                  {new Intl.DateTimeFormat("pt-BR").format(dateObj.date)}
                </span>
                <span>-</span>
              </div>

              <span className="mx-2 truncate max-w-[140px]">
                {dateObj.splitDay}
              </span>
            </div>
          );
        })
      }
    </>
  );
}
