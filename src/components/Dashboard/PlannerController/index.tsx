import { Button } from "../../LoginPage/Button";
import DashboardCard from "../DashboardCard";
import { PlannerCard } from "./PlannerCard";
import LogoPro from "../../../assets/LogoPro.png";
import { UserPlannersProps } from "../../../@types/PlannerProps";

interface PlannerControllerProps {
  planners: UserPlannersProps | undefined
  price: number
}

export function PlannerController({ planners, price }: PlannerControllerProps) {
  return (
    <DashboardCard title="My Jacked Planners:" className="min-w-[360px] w-full">
      {planners === undefined ?
        null :
        (<div className="h-full flex flex-col gap-4">

          <div className="flex flex-col gap-4">
            <PlannerCard
              key={planners.planner1?.uid}
              plannerIndex={1}
              planner={planners.planner1}
            />
            <PlannerCard
              key={planners.planner2?.uid}
              plannerIndex={2}
              planner={planners.planner2}

            />
            <PlannerCard
              key={planners.planner2?.uid}
              plannerIndex={3}
              planner={planners.planner3}
            />
          </div>

          <Button variant="dark" size="custom" className="font-medium" >
            Get <span className="text-orange-500 px-1">PRO</span> to add new Planners
          </Button>

          <div className="flex items-center justify-center gap-1 ">
            <img src={LogoPro} alt="" className="w-44" />
            <p className="font-medium text-gray-100 text-2xl leading-none"
            >
              ${price}<span
                className="
            text-gray-100 text-xs ml-3 relative
            before:content-['......'] before:text-transparent before:bg-price-slash
            before:bg-contain before:bg-no-repeat before:absolute
            before:bottom-1 before:-left-2
            "
              >
                mo
              </span>
            </p>
          </div>
        </div >)}
    </DashboardCard >
  );
}
