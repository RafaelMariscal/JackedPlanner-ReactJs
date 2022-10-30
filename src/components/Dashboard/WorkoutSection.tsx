import { useId, useState } from "react";
import DashboardCard from "./DashboardCard";
import { ExerciseCard } from "./ExerciseCard";
import * as Popover from '@radix-ui/react-popover';

export function WorkoutSection() {
  const [isExerciseSelected, setisExerciseSelected] = useState(false)
  const [isExerciseDone, setIsExerciseDone] = useState(false)

  const ExerciseList = [
    { name: 'Crucifixo com Cabos', index: 1, description: 'Description 1 testando' },
    { name: 'Crossover (Bi-articulado)', index: 2, description: 'Description 2 testando' },
  ]

  return (
    <DashboardCard
      title="Workout Section:"
      subtitle="Chest / Shoulders"
    >
      <div className="flex flex-col gap-2">
        {
          ExerciseList.map(exercise => {
            const [showDescription, setshowDescription] = useState(false)
            function handleDescriptionCardClick(isOpen: Boolean) {
              if (isOpen) {
                return setshowDescription(true)
              } else {
                return setshowDescription(false)
              }
            }
            return (
              <Popover.Root key={useId()} onOpenChange={(isOpen) => handleDescriptionCardClick(isOpen)}>
                <ExerciseCard.Root key={useId()}
                  selected={isExerciseSelected}
                  done={isExerciseDone}
                  index={exercise.index}
                  className="relative"
                >
                  <ExerciseCard.Index index={exercise.index} />
                  <ExerciseCard.Name name={exercise.name} />
                  <Popover.Anchor className="absolute ml-[2.75rem] mt-2" style={{ background: 'transparent' }} />
                  <Popover.Portal>
                    <Popover.Content align="start">
                      <ExerciseCard.Description done={isExerciseDone} description={exercise.description} />
                    </Popover.Content>
                  </Popover.Portal>

                  <ExerciseCard.Sets sets={3} />

                  <span className="mt-1">
                    x
                  </span>

                  <ExerciseCard.Reps reps={20} />

                  <Popover.Trigger className="closed"
                    onClick={() => setshowDescription(!showDescription)}>
                    <ExerciseCard.DescriptionCard showDescription={showDescription} />
                  </Popover.Trigger>

                  <ExerciseCard.Todo done={isExerciseDone} />

                </ExerciseCard.Root>
              </Popover.Root>
            )
          })
        }

      </div>

    </DashboardCard>
  )
}
