import { useId } from "react";
import DashboardCard from "./DashboardCard";
import { ExerciseCard } from "./ExerciseCard";

export function WorkoutSection() {
  return (
    <DashboardCard
      title="Workout Section:"
      subtitle="Chest / Shoulders"
    >
      <div className="flex flex-col gap-2">
        <ExerciseCard.Root key={useId()}>
          <ExerciseCard.Index index={1} />
          <ExerciseCard.Name name={'Exercise Name'} description={'test'} />
          <ExerciseCard.Sets sets={3} />
          <span>x</span>
          <ExerciseCard.Reps reps={20} />
          <ExerciseCard.Description />
        </ExerciseCard.Root>
      </div>
    </DashboardCard>
  )
}
