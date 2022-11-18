import { Timestamp } from "firebase/firestore";

type ScheduleLabels = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "rest"

export interface PlannerProps {
  name: string
  startDate: Date | Timestamp
  schedule: ScheduleLabels[]
  split: SplitProps
}

export interface SplitProps {
  title: string;
  startDate: Date | Timestamp;
  schedule: ScheduleProps
  exercises: ExerciseProps[]
}

export interface ScheduleProps {
  scheduledDate: Date | Timestamp
  splitKey: ScheduleLabels
}

export interface ExerciseProps {
  index: number
  name: string
  weightUnd: string
  description: string
  sets: number
  reps: number
  setsWeight: number[]
  liftedReps: number[]
  liftedWeight: number[]
}
