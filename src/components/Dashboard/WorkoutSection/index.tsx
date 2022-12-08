import { useId, useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import * as Popover from "@radix-ui/react-popover";
import DashboardCard from "../DashboardCard";
import { ExerciseProps, PlannerProps, ScheduleLabel } from "../../../@types/PlannerProps";
import LoadingModal from "../../LoadingModal";

interface WorkoutSectionProps{
  exercises: ExerciseProps[]
}

export function WorkoutSection({exercises}:WorkoutSectionProps) {
  const [isExerciseSelected, setisExerciseSelected] = useState(false);
  const [isExerciseDone, setIsExerciseDone] = useState(false);
  const [showDescription, setshowDescription] = useState(false);

  function handleDescriptionCardClick(isOpen: boolean) {
    if (isOpen) {
      return setshowDescription(true);
    } else {
      return setshowDescription(false);
    }
  }

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
                <Popover.Root key={exercise.description} onOpenChange={(isOpen) => handleDescriptionCardClick(isOpen)}>
                  <ExerciseCard.Root key={exercise.description}
                    selected={isExerciseSelected}
                    done={isExerciseDone}
                    className="relative"
                  >
                    <ExerciseCard.Index index={exercise.index} />
                    <ExerciseCard.Name name={exercise.name} />
                    <Popover.Portal>
                      <Popover.Content align={index + 1 === exercises.length ? "end" : "start"} side="left">
                        <ExerciseCard.Description done={isExerciseDone} description={exercise.description} />
                      </Popover.Content>
                    </Popover.Portal>
                    <ExerciseCard.Sets sets={exercise.sets} />
                    <span className="mt-1">
                    x
                    </span>
                    <ExerciseCard.Reps reps={exercise.reps} />
                    <Popover.Trigger className="closed"
                      onClick={() => setshowDescription(!showDescription)}>
                      <ExerciseCard.DescriptionCard showDescription={showDescription} />
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
