import { Calendar } from "../../components/Dashboard/Calendar";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { WorkoutSection } from "../../components/Dashboard/WorkoutSection";

export function Home() {
  return (
    <div className="h-full flex flex-col gap-4" >
      <div className="flex-1 flex gap-4">
        <div className="flex-1 flex gap-4 ">
          <PlannerController />
          <Calendar />
        </div>

        <WorkoutSection />
      </div>

      <div className="flex-1 flex gap-4">
        <PersonalNotes />
        <ExercisePlan />
      </div>

      <div className="flex-1 flex bg-gray-opac-35 gap-4">
        bottom section
      </div>
    </div>
  )
}
