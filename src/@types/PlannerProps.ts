import { Timestamp } from "firebase/firestore";

export interface UserPlannersProps{
  planner1: PlannerProps | null,
  planner2: PlannerProps | null,
  planner3: PlannerProps | null,
}

export type ScheduleLabel = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "rest"

export interface PlannerProps {
  name: string
  startDate: Date | Timestamp
  schedule: ScheduleLabel[]
  splits: SplitProps[]
}


export interface SplitProps {
  splitLabel: ScheduleLabel
  splitTitle: string
  splitStartDate: Date | Timestamp
  splitSchedule: Date[] | Timestamp[]
  splitExercises: ExerciseProps[]
}

export interface ExerciseProps {
  index: number
  name: string
  sets: number
  reps: number
  weightUnd: "kg" | "plt" | "body"
  description: string
  setsWeight: number[]
  liftedWeight: number[]
  liftedReps: number[]
}
