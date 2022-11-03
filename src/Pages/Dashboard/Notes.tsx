import { Calendar } from "../../components/Dashboard/Calendar/Index";
import DashboardCard from "../../components/Dashboard/DashboardCard";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";

export function Notes() {
  return (
    <div className="h-full flex gap-4" >
      <div className="h-full flex flex-col gap-4" >
        <div className="flex gap-4">
          <div className="flex justify-between gap-4 w-full max-w-[720px]">
            <PlannerController price={4.99} />
            <Calendar />
          </div>
        </div>

        <div className="flex-1 flex gap-4">
          <PersonalNotes history />
        </div>

        <div className="flex-1 flex gap-4">
          <ExercisePlan />
        </div>
      </div>

      <DashboardCard title="hidden" hideTittle className="w-full"
        classNameCard="w-full max-w-[460px] h-full overflow-hidden 
        bg-crossfitGirl bg-cover bg-no-repeat bg-center
        flex flex-col items-center justify-center gap-1
        rounded-lg border-2 border-orange-500
        "
      >
        <span className="
            text-gray-100 text-[4.5rem] font-semibold leading-none
            drop-shadow-[.15rem_.15rem_.1rem_rgba(0,0,0,0.85)] -translate-x-[30%]
            "
        >
          SHAPE
        </span>

        <span className="relative
            text-gray-100 text-[4.5rem] font-semibold leading-none
            drop-shadow-[.15rem_.15rem_.1rem_rgba(0,0,0,0.85)]
            before:absolute before:content-[''] before:bg-orange-500
            before:h-2 before:w-[5ch] before:-left-[125%] before:top-[50%]
            before:drop-shadow-lg
            after:absolute after:content-[''] after:bg-orange-500
            after:h-2 after:w-[5ch] after:-right-[125%] after:top-[50%]
            after:drop-shadow-lg
            
            "
        >
          YOUR
        </span>

        <span className="
            text-gray-100 text-[4.5rem] font-semibold leading-none
            drop-shadow-[.15rem_.15rem_.1rem_rgba(0,0,0,0.85)] translate-x-[30%]
            "
        >
          BODY
        </span>
      </DashboardCard>
    </div>
  )
}
