import { Timestamp } from "firebase/firestore";

export interface UserPlannersProps{
  planner1: PlannerProps | null,
  planner2: PlannerProps | null,
  planner3: PlannerProps | null,
}

export type ScheduleLabel = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "rest"

export interface calendarProps {
  label: ScheduleLabel
  date: Timestamp
}

export interface PlannerProps {
  name: string
  startDate: Date | Timestamp
  schedule: ScheduleLabel[]
  splits: SplitProps[],
  plannerCalendar: calendarProps[]
}

export interface SplitProps {
  splitLabel: ScheduleLabel
  splitTitle: string
  splitSchedule: splitScheduleProps[]
  splitExercises: ExerciseProps[]
}

export interface splitScheduleProps{
  date: Date | Timestamp
  notes: NotesProps | null
}

export interface NotesProps {
  cardio: CardioProps[]
  rate: "BAD" | "OK" | "GOOD" | "GREAT" | null
  trainingNotes: string
}

export interface CardioProps {
  distance: number
  time: number
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
