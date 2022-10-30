import { useId, useState } from "react";
import DashboardCard from "./DashboardCard";
import { ExerciseCard } from "./ExerciseCard";

export function WorkoutSection() {
  const [isExerciseSelected, setisExerciseSelected] = useState(true)
  const [isExerciseDone, setIsExerciseDone] = useState(false)
  const [isDescriptionSelected, setisDescriptionSelected] = useState(false)
  return (
    <DashboardCard
      title="Workout Section:"
      subtitle="Chest / Shoulders"
    >
      <div className="flex flex-col gap-2">
        <ExerciseCard.Root key={useId()} selected={isExerciseSelected} done={isExerciseDone} showDescription={isDescriptionSelected} >
          <ExerciseCard.Index index={1} />
          <ExerciseCard.Name name={'Exercise Name'} description={'test'} showDescription={isDescriptionSelected} />
          <ExerciseCard.Sets sets={3} />
          <span>x</span>
          <ExerciseCard.Reps reps={20} />
          <ExerciseCard.Description selected />
        </ExerciseCard.Root>
      </div>

    </DashboardCard>
  )
}
