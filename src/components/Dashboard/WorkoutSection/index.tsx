import { useEffect, useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import * as Popover from "@radix-ui/react-popover";
import DashboardCard from "../DashboardCard";
import { ExerciseProps } from "../../../@types/PlannerProps";
import LoadingModal from "../../LoadingModal";
import { useOutletDataContext } from "../../../Pages/Dashboard";

// interface WorkoutSectionProps {
//   exercises: ExerciseProps[] | null
// }

export function WorkoutSection(/* { exercises }: WorkoutSectionProps */) {
  const {
    PlannerSelected, selectedExerciseId, selectedSplit,
    setSelectedExerciseId, exercisesNotes
  } = useOutletDataContext();

  const [IsModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (exercises && exercises.length > 0) {
      setSelectedExerciseId(exercises[0].uid);
    }
  }, [selectedSplit]);

  let exercises: ExerciseProps[] | null = [];
  let splitLabel: string | null = null;
  if (PlannerSelected !== null) {
    exercises = selectedSplit ? selectedSplit.splitExercises : null;
    splitLabel = selectedSplit ? selectedSplit.splitLabel : null;
  }

  // console.log(exercises);
  return (
    <DashboardCard title="Workout Section:" subtitle={selectedSplit?.splitTitle} extend className="min-w-[39rem]"
      classNameCard="max-h-[18.75rem] overflow-y-auto"
    >
      <div className="flex flex-col gap-2">
        {
          exercises === undefined ? (
            <LoadingModal visible />
          ) : (exercises === null || splitLabel === null) ? (
            <span className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                max-w-[16ch] text-gray-100 text-lg text-center
              "
            >
              There is no split scheduled for today
            </span>
          ) : exercises.length === 0 ? (
            <span className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-max text-gray-100 text-lg
              "
            >
              Rest Day
            </span>
          ) :
            exercises.map((exercise, index) => {
              const exerciseNotes = exercisesNotes ? exercisesNotes[index] : null;
              const liftedRepsSorted = exerciseNotes?.liftedReps?.filter(item => item !== "empty");
              const liftedWeightSorted = exerciseNotes?.liftedWeight?.filter(item => item !== "empty");

              const done = liftedRepsSorted?.length === exercise.sets &&
                liftedWeightSorted?.length === exercise.sets ? true : false;

              return (
                <Popover.Root
                  key={exercise.uid}
                  onOpenChange={(isOpen) => setIsModalOpen(isOpen)}>
                  <ExerciseCard.Root
                    exerciseId={exercise.uid}
                    selectedExerciseId={selectedExerciseId}
                    setSelectedExerciseId={setSelectedExerciseId}
                    done={done}
                    className="relative cursor-pointer"
                  >
                    <ExerciseCard.Index index={exercise.index} />
                    <ExerciseCard.Name name={exercise.name} />
                    <Popover.Portal>
                      <Popover.Content align={exercises && index + 1 === exercises.length ? "end" : "start"} side="left">
                        <ExerciseCard.Description
                          done={done}
                          description={exercise.description} />
                      </Popover.Content>
                    </Popover.Portal>
                    <ExerciseCard.Sets sets={exercise.sets} />
                    <span className="mt-1">
                      x
                    </span>
                    <ExerciseCard.Reps reps={exercise.reps} />
                    <Popover.Trigger className="closed"
                      onClick={() => setIsModalOpen(!IsModalOpen)}>
                      <ExerciseCard.DescriptionCard
                        exerciseId={exercise.uid}
                        selectedExerciseId={selectedExerciseId}
                        IsModalOpen={IsModalOpen}
                        done={done}
                      />
                    </Popover.Trigger>
                    <ExerciseCard.Todo done={done} />
                    <ExerciseCard.Edit />
                  </ExerciseCard.Root>
                </Popover.Root>
              );
            })
        }
      </div>
    </DashboardCard>
  );
}
