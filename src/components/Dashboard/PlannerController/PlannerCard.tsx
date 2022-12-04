import clsx from "clsx";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import { PlannerSelectedType } from "../../../Pages/Dashboard/Home";

interface PlannerCardProps {
  index: number
  PlannerName?: string
  selected?: PlannerSelectedType
}

export function PlannerCard({ index, PlannerName, selected}: PlannerCardProps) {
  return (
    <div className={clsx(
      "bg-gray-100 h-10 rounded-lg px-4 flex items-center justify-between",
      "font-semibold text-sm leading-4 text-gray-800 cursor-pointer select-none",
      {
        "outline outline-2 outline-offset-1 outline-orange-500": selected === index
      }
    )}
    >
      <div className="flex items-center">
        <span >
          {index}
        </span>

        <p className={PlannerName ? "pl-2 truncate max-w-[240px]" : "font-medium text-gray-400 pl-2"}>
          {PlannerName ? PlannerName : "Add a New Planner"}
        </p>
      </div>

      <div className={PlannerName ? "w-[1.125rem] hover:animate-wiggle" : "hidden"}>
        <EditIcon/>
      </div>
    </div>
  );
}
