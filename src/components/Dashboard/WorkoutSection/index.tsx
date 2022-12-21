import { useEffect, useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import * as Popover from "@radix-ui/react-popover";
import DashboardCard from "../DashboardCard";
import { ExerciseProps } from "../../../@types/PlannerProps";
import LoadingModal from "../../LoadingModal";
import { useOutletDataContext } from "../../../Pages/Dashboard";

interface WorkoutSectionProps {
  exercises: ExerciseProps[] | null
  setSelectedExerciseId: (id: string | null) => void
}

export function WorkoutSection({ exercises, setSelectedExerciseId }: WorkoutSectionProps) {
  const { selectedExerciseId, selectedSplit } = useOutletDataContext();
  const [isExerciseDone, setIsExerciseDone] = useState(true);
  const [IsModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (exercises && exercises.length > 0) {
      setSelectedExerciseId(exercises[0].uid);
    }
  }, [exercises]);

  return (
    <DashboardCard title="Workout Section:" subtitle={selectedSplit?.splitTitle} extend className="min-w-[39rem]"
      classNameCard="max-h-[18.75rem] overflow-y-auto"
    >
      <div className="flex flex-col gap-2">
        {
          exercises === undefined ? (
            <LoadingModal visible />
          ) : exercises === null ? (
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
              const done = false;
              // if(exercise.liftedWeight?.length === exercise.liftedReps?.length &&
              //   exercise.liftedWeight?.length === exercise.sets){
              //   done = true;
              // }
              // console.log({
              //   weight: exercise.liftedWeight,
              //   lifted: exercise.liftedReps,
              //   sets: exercise.sets
              // });
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
                      <Popover.Content align={index + 1 === exercises.length ? "end" : "start"} side="left">
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
                        IsModalOpen={IsModalOpen} />
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
