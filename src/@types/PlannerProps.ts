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
  uid: string
  name: string
  startDate: Timestamp
  duration: number
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
  date: Timestamp
  notes: NotesProps | null
  exerciseNotes: ExerciseNotes[] | null
}

export interface ExerciseNotes {
  setsWeight?: number[]
  liftedWeight?: ("empty" | number)[]
  liftedReps?: ("empty" | number)[]
}

export type RateProps = "BAD" | "OK" | "GOOD" | "GREAT"

export interface NotesProps {
  cardio: CardioProps[]
  rate: RateProps
  trainingNotes: string
}

export interface CardioProps {
  distance: number
  time: number
  done: boolean
}

export interface ExerciseProps {
  uid: string
  index: number
  name: string
  sets: number
  reps: number
  description: string
  weightUnd?: "kg" | "plt" | "body"
  setsWeight?: number[]
}


