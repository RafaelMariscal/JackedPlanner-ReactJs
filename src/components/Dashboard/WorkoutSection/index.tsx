import {  useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import * as Popover from "@radix-ui/react-popover";
import DashboardCard from "../DashboardCard";
import { ExerciseProps } from "../../../@types/PlannerProps";
import LoadingModal from "../../LoadingModal";

interface WorkoutSectionProps{
  exercises: ExerciseProps[]
  selectedExerciseId: string | null
  setSelectedExerciseId: (e: string | null) => void
}

export function WorkoutSection({exercises, selectedExerciseId, setSelectedExerciseId}:WorkoutSectionProps) {
  const [isExerciseDone, setIsExerciseDone] = useState(false);
  const [IsModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardCard title="Workout Section:" subtitle="Chest / Shoulders" extend className="min-w-[39rem]"
      classNameCard="max-h-[18.75rem] overflow-y-auto"
    >
      <div className="flex flex-col gap-2">
        {
          exercises === undefined ? (
            <>
              <LoadingModal visible/>
            </>
          ) :
            exercises.map((exercise, index) => {
              return (
                <Popover.Root
                  key={exercise.uid}
                  onOpenChange={(isOpen) => setIsModalOpen(isOpen)}>
                  <ExerciseCard.Root
                    exerciseId={exercise.uid}
                    selectedExerciseId={selectedExerciseId}
                    setSelectedExerciseId={setSelectedExerciseId}
                    done={isExerciseDone}
                    className="relative"
                  >
                    <ExerciseCard.Index index={exercise.index} />
                    <ExerciseCard.Name name={exercise.name} />
                    <Popover.Portal>
                      <Popover.Content align={index + 1 === exercises.length ? "end" : "start"} side="left">
                        <ExerciseCard.Description
                          done={isExerciseDone}
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
                    <ExerciseCard.Todo done={isExerciseDone} />
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
