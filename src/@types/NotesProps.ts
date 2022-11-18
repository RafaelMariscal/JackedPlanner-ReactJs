import { Timestamp } from "firebase/firestore";

export interface NotesProps {
  sessionNotes: NotesTakeProps[]
}

// scheduledDate Ref (planners/uid/plannerSelectd/split/splitKey/scheduledDate)
export interface NotesTakeProps {
  scheduledDate: Date | Timestamp
  trainingNotes: string
  rate: "BAD" | "OK" | "GOOD" | "GREAT"
  cardio: CardioProps[]
}

export interface CardioProps {
  distance: number
  time: number
}
