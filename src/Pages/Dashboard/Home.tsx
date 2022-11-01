import { Calendar } from "../../components/Dashboard/Calendar";
import { ExercisePlan } from "../../components/Dashboard/ExercisePlan";
import { PersonalNotes } from "../../components/Dashboard/PersonalNotes";
import { PlannerController } from "../../components/Dashboard/PlannerController";
import { WeightHistory } from "../../components/Dashboard/WeightHistory";
import { WorkoutSection } from "../../components/Dashboard/WorkoutSection";

export function Home() {
  return (
    <div className="h-full flex flex-col gap-4" >
      <div className="flex gap-4">
        <div className="flex justify-between gap-4 w-full max-w-[720px]">
          <PlannerController price={4.99} />
          <Calendar />
        </div>

        <WorkoutSection />
      </div>

      <div className="flex-1 max-h-[14.875rem] flex gap-4">
        <WeightHistory />
        <ExercisePlan />
      </div>

      <div className="flex-1 flex bg-gray-opac-35 gap-4">
        <PersonalNotes />
      </div>
    </div>
  )
}
