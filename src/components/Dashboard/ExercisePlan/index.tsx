import { v4 as uuidV4 } from "uuid";
import { ExerciseProps } from "../../../@types/PlannerProps";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import DashboardCard from "../DashboardCard";
import { SetPlan, SetPlanProps } from "./SetPlan";

interface ExercisePlanProps {
  exercises: ExerciseProps[] | null
  selectedExerciseId: string | null
}

export function ExercisePlan({exercises, selectedExerciseId}:ExercisePlanProps) {
  const selectedExercise = exercises?.find(exercise => exercise.uid === selectedExerciseId);
  const setsPlan =  selectedExercise ?  selectedExercise.setsWeight : null;

  return (
    <DashboardCard title="Exercise Plan:" extend className="min-w-[39rem]" classNameCard="px-4 py-4">
      <div className="w-full h-full flex items-center gap-2">
        <div className="pb-8 flex flex-col gap-4 text-xs text-gray-100">
          <span>Set:</span>
          <span>W8:</span>
          <span>Used:</span>
          <span>Reps:</span>
        </div>

        <div className="flex items-center gap-2">
          {setsPlan?.map((weight, index) => {
            return (
              <SetPlan
                key={uuidV4()}
                index={index + 1}
                und={selectedExercise?.weightUnd}
                weight={weight} />
            );
          })}
        </div>

        <button className="ml-2
            h-9 rounded-lg w-fit px-2 bg-gray-100
            flex items-center cursor-pointer
            "
        >
          <EditIcon/>
        </button>


      </div>
    </DashboardCard>
  );
}
