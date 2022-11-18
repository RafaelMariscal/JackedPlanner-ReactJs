import { Button } from "../../LoginPage/Button";
import DashboardCard from "../DashboardCard";
import { PlannerCard } from "./PlannerCard";

interface PlannerControllerProps {
  price: number
}

export function PlannerController({ price }: PlannerControllerProps) {
  return (
    <DashboardCard title="My Jacked Planners:" className="min-w-[360px] w-full">
      <div className="h-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <PlannerCard index={1} PlannerName={"PUSH PULL LEGS by Jeff"} />
          <PlannerCard index={2} PlannerName={"Mountaing Dog - Shouders focused asdfasdfdasdfasdf"} />
          <PlannerCard index={3} />
        </div>

        <Button variant="dark" size="custom" className="font-medium" >
          Get <span className="text-orange-500 px-1">PRO</span> to add new Planners
        </Button>

        <div className="flex items-center justify-center gap-1 ">
          <img src="/src/assets/LogoPro.png" alt="" className="w-44" />
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
      </div >
    </DashboardCard >
  );
}
