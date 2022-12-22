import clsx from "clsx";
import { v4 as uuidV4 } from "uuid";
import { ExerciseNotes, ExerciseProps } from "../../../@types/PlannerProps";
import { EditIcon } from "../../../assets/icons/Dashboard/Edit";
import { useOutletDataContext } from "../../../Pages/Dashboard";
import DashboardCard from "../DashboardCard";
import { SetPlan } from "./SetPlan";

interface ExercisePlanProps {
  exercises: ExerciseProps[] | null
}
export function ExercisePlan({ exercises }: ExercisePlanProps) {
  const { selectedExerciseId, exercisesNotes } = useOutletDataContext();

  const exerciseIndex = exercises?.findIndex(exercise => exercise.uid === selectedExerciseId);
  let selectedExerciseNotes: null | ExerciseNotes = null;
  if (exercisesNotes) {
    exerciseIndex !== undefined ? selectedExerciseNotes = exercisesNotes[exerciseIndex] : null;
  }
  const selectedExercise = exercises?.find(exercise => exercise.uid === selectedExerciseId);
  return (
    <DashboardCard title="Exercise Plan:" extend className="min-w-[39rem]" classNameCard="px-4 py-4 overflow-x-auto">
      <div className="h-full flex items-center gap-2">
        <div className="pb-8 flex flex-col gap-4 text-xs text-gray-100 select-none">
          <span>Set:</span>
          <span>W8:</span>
          <span>Used:</span>
          <span>Reps:</span>
        </div>

        <div className="flex items-center gap-2">
          {selectedExerciseNotes?.setsWeight?.map((weight, index) => {
            let disable = false;
            if (index > 0 && selectedExerciseNotes?.liftedWeight &&
              selectedExerciseNotes?.liftedReps) {
              const preveousSetLiftedWeight = selectedExerciseNotes?.liftedWeight[index - 1];
              const preveousSetLiftedReps = selectedExerciseNotes?.liftedWeight[index - 1];
              preveousSetLiftedWeight === "empty" || preveousSetLiftedReps === "empty" ?
                disable = true : false;
            }
            return (
              <SetPlan
                key={uuidV4()}
                index={index}
                und={selectedExercise?.weightUnd}
                weight={weight}
                exerciseIndex={exerciseIndex}
                weightUsed={selectedExerciseNotes?.liftedWeight![index]}
                liftedReps={selectedExerciseNotes?.liftedReps![index]}
                disabled={disable}
              />
            );
          })}
        </div>

        <button className={clsx(
          "ml-2 h-9 rounded-lg w-fit px-2 bg-gray-100 flex items-center cursor-pointer",
          { "hidden": selectedExercise === undefined }
        )}
        >
          <EditIcon />
        </button>
      </div>
    </DashboardCard>
  );
}
