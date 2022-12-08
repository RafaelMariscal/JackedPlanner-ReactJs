import clsx from "clsx";
import { PlannerProps } from "../../../@types/PlannerProps";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import { useUserContext } from "../../../contexts/userContext/hook";
import { useOutletDataContext } from "../../../Pages/Dashboard";

interface PlannerCardProps {
  index: 1 | 2 | 3
  PlannerName?: string
  PlannerSelected: PlannerProps | null
}

export function PlannerCard({ index, PlannerName, PlannerSelected}: PlannerCardProps) {
  const {Planners} = useUserContext();
  const {setPlannerSelected} = useOutletDataContext();

  function handlePlannerSelector(planner: 1 | 2 | 3){
    if(Planners === undefined) return;
    switch (planner) {
    case 1:
      setPlannerSelected(Planners.planner1);
      break;
    case 2:
      setPlannerSelected(Planners.planner2);
      break;
    case 3:
      setPlannerSelected(Planners.planner3);
      break;
    default:
      setPlannerSelected(Planners.planner1);
      break;
    }
  }

  const PlannerSelectedName = PlannerSelected?.name;
  const TestSelected = !!PlannerSelected && PlannerSelectedName === PlannerName ? true : false;


  return (
    <button
      onClick={()=>handlePlannerSelector(index)}
      className={clsx(
        "bg-gray-100 h-10 rounded-lg px-4 flex items-center justify-between",
        "font-semibold text-sm leading-4 text-gray-800 cursor-pointer select-none",
        {
          "outline outline-2 outline-offset-1 outline-orange-500": TestSelected
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
    </button>
  );
}
