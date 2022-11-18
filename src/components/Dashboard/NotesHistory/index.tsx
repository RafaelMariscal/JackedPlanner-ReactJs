import { useId } from "react";
import DashboardCard from "../DashboardCard";
import { NotesHistoryCards } from "./NotesHistoryCards";

const DatesExemple = [
  { date: new Date(2022, 6, 28), splitDay: "Back" },
  { date: new Date(2022, 8, 28), splitDay: "Legs" },
  { date: new Date(2022, 9, 28), splitDay: "Chest" },
  { date: new Date(2022, 9, 29), splitDay: "Back" },
  { date: new Date(2022, 9, 30), splitDay: "Legs" },
  { date: new Date(2022, 9, 31), splitDay: "Back" },
  { date: new Date(2022, 10, 1), splitDay: "Chest" },
  { date: new Date(2022, 10, 22), splitDay: "Legs" },
];
const MonthsLabels = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
const Months = DatesExemple.map(note => {
  const m = note.date.getMonth();
  return MonthsLabels[m];
});
const MonthsList = [...new Set(Months)];

export function NotesHistory() {
  return (
    <DashboardCard title="Personal Notes History"
      className="w-full min-w-[360px]" classNameCard="overflow-y-auto max-h-[300px]">
      {
        MonthsList.map((month) => {
          return (
            <div key={useId()} className="[&_+div]:mt-2 flex flex-col gap-2">
              <span className="block text-gray-100 text-sm underline underline-offset-2">{month}:</span>
              <NotesHistoryCards month={month} dates={DatesExemple} />
            </div>
          );
        })
      }
    </DashboardCard>
  );
}
