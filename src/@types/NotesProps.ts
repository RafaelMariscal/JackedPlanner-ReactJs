import { Timestamp } from "firebase/firestore";
import { ScheduleLabel } from "./PlannerProps";

export interface NotesProps {
  sessionNotes: NotesTakeProps[]
}

// scheduledDate Ref (planners/uid/plannerSelectd/split/splitKey/scheduledDate)
export interface NotesTakeProps {
  splitTag: ScheduleLabel
  scheduledDate: Date | Timestamp | null
  trainingNotes: string
  rate: "BAD" | "OK" | "GOOD" | "GREAT" | null
  cardio: CardioProps[]
}

export interface CardioProps {
  distance: number
  time: number
}
