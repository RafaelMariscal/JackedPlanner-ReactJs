import { useId, useState } from "react";
import DashboardCard from "./DashboardCard";
import { ExerciseCard } from "./ExerciseCard";
import * as Popover from '@radix-ui/react-popover';

export function WorkoutSection() {
  const [isExerciseSelected, setisExerciseSelected] = useState(false)
  const [isExerciseDone, setIsExerciseDone] = useState(false)

  const ExerciseList = [
    { name: 'Crucifixo com Cabos', index: 1, description: 'Description 1 testing ' },
    { name: 'Crossover (Bi-articulado)', index: 2, description: 'Description 2 testing' },
    { name: 'Crucifixo com Cabos', index: 1, description: 'Description 1 testing ' },
    { name: 'Crossover (Bi-articulado)', index: 2, description: 'Description 2 testing' },
    { name: 'Crucifixo com Cabos', index: 1, description: 'Description 1 testing ' },
    { name: 'Crossover (Bi-articulado)', index: 2, description: 'Description 2 testing' },
  ]

  return (
    <DashboardCard title="Workout Section:" subtitle="Chest / Shoulders" extend
    >
      <div className="flex flex-col gap-2">
        {
          ExerciseList.map((exercise, index) => {
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
                  className="relative"
                >
                  <ExerciseCard.Index index={exercise.index} />
                  <ExerciseCard.Name name={exercise.name} />
                  <Popover.Portal>
                    <Popover.Content align={index + 1 === ExerciseList.length ? 'end' : 'start'} side="left" className="">
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
                  <ExerciseCard.Edit />
                </ExerciseCard.Root>
              </Popover.Root>
            )
          })
        }

      </div>

    </DashboardCard>
  )
}
