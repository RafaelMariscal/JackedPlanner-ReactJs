import { useId } from "react";
import { Button } from "../LoginPage/Button";
import DashboardCard from "./DashboardCard";

interface JackedPlannerProCallProps {
  price: number
}


export function JackedPlannerProCall({ price }: JackedPlannerProCallProps) {
  const features = [
    "All the Jacked Planners in the plataform",
    "Unlimited Jacked Planners",
    "Track your workout progress",
    "Get workout data, section by section!",
  ]
  return (
    <DashboardCard title="Jacked Planner PRO" className="w-full max-w-[720px] min-w-[662px]" classNameCard="py-0 px-0" >
      <div className="
        w-full h-full px-6 py-4 font-medium text-gray-100 
        border-t-8 border-b-8 border-orange-500
        flex flex-col items-center justify-center
        "
      >
        <p className="pb-4 self-start">
          With <span className="text-orange-500 font-semibold">Jacked Planner PRO</span>, you can access:
        </p>
        <div className="flex items-center justify-between w-full">
          <ul className=" flex flex-col gap-4">
            {features.map(feature => {
              return (
                <li key={useId()}
                  className=" leading-tight
                  pl-4 relative before:content-[''] before:absolute
                  before:w-2 before:h-2 before:bg-orange-500 before:left-0
                  before:top-[0] before:translate-y-[50%]
                  "
                >
                  {feature}
                </li>
              )
            })}
          </ul>

          <div className="flex flex-col items-center justify-center gap-1 ">
            <img src="/src/assets/LogoPro.png" alt="" className="w-[230px]" />
            <p className="font-medium text-gray-100 text-2xl leading-none"
            >
              Only ${price}<span
                className="
            text-gray-100 text-xs ml-3 relative
            before:content-['......'] before:text-transparent before:bg-price-slash 
            before:bg-contain before:bg-no-repeat before:absolute
            before:bottom-1 before:-left-2
            "
              >
                month
              </span>
            </p>
            <Button variant="dark" className="font-medium">
              Get <span className="px-1 text-orange-500 font-semibold">PRO</span> Now!
            </Button>
          </div>

        </div>
      </div>
    </DashboardCard>
  )
}