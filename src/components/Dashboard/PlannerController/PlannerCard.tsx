
interface PlannerCardProps {
  index: number;
  PlannerName?: string;
}

export function PlannerCard({ index, PlannerName }: PlannerCardProps) {
  return (
    <div className="
    bg-gray-100 h-10 rounded-lg px-4
    flex items-center justify-between
    font-semibold text-sm leading-4 text-gray-800
    cursor-pointer select-none
    "
    >
      <div className="flex items-center">
        <span >
          {index}
        </span>

        <p className={PlannerName ? "pl-2 truncate max-w-[240px]" : "font-medium text-gray-400 pl-2"}>
          {PlannerName ? PlannerName : "Add a New Planner"}
        </p>
      </div>

      <img src="/src/assets/icons/Dashboard/Edit.svg" alt=""
        className={PlannerName ? "w-[1.125rem]" : "hidden"}
      />
    </div>
  );
}
