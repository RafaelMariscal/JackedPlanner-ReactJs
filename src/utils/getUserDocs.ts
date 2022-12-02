import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { NotesProps } from "../@types/NotesProps";
import { UserPlannersProps } from "../@types/PlannerProps";
import { db } from "../services/firebase";
import { plannersConverter, notesConverter } from "./typesConverters";

export const USER_PLANNERS = "@FirestoreFirebase:planners";
export const USER_NOTES = "@FirestoreFirebase:notes";

interface getUserDocsDataProps {
  UserLogged: User
  setPlanners: (planner: UserPlannersProps) => void
  setNotes: (notes: NotesProps) => void
}

export async function getUserDocsData ({UserLogged, setNotes, setPlanners}:getUserDocsDataProps) {
  const plannersDocRef = doc(db, "planners", UserLogged.uid)
    .withConverter(plannersConverter);
  const plannersDocSnap = await getDoc(plannersDocRef);

  const NotesDocRef = doc(db, "notes", UserLogged.uid)
    .withConverter(notesConverter);
  const NotesDocSnap = await getDoc(NotesDocRef);

  if (plannersDocSnap.exists() && NotesDocSnap.exists()) {
    setPlanners(plannersDocSnap.data());
    setNotes(NotesDocSnap.data());
    sessionStorage.setItem(USER_PLANNERS,
      JSON.stringify(plannersDocSnap.data()));
    sessionStorage.setItem(USER_NOTES,
      JSON.stringify(NotesDocSnap.data()));
  } else {
    console.log("No such document!");
  }
}
