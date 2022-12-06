import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { NotesProps } from "../@types/NotesProps";
import { UserPlannersProps } from "../@types/PlannerProps";
import { USER_NOTES, USER_PLANNERS } from "../contexts/userContext/provider";
import { db } from "../services/firebase";
import { plannersConverter, notesConverter } from "./typesConverters";

interface getUserDocsDataProps {
  user: User
  setPlanners: (planners: UserPlannersProps) => void
  setNotes: (notes: NotesProps)=> void
}

export async function getUserDocsData ({ user, setPlanners, setNotes }:getUserDocsDataProps) {
  const plannersDocRef = doc(db, "planners", user.uid)
    .withConverter(plannersConverter);
  const plannersDocSnap = await getDoc(plannersDocRef);

  const notesDocRef = doc(db, "notes", user.uid)
    .withConverter(notesConverter);
  const notesDocSnap = await getDoc(notesDocRef);

  if (plannersDocSnap.exists() && notesDocSnap.exists()) {
    setPlanners(plannersDocSnap.data());
    sessionStorage.setItem(USER_PLANNERS,
      JSON.stringify(plannersDocSnap.data()));
    setNotes(notesDocSnap.data());
    sessionStorage.setItem(USER_NOTES,
      JSON.stringify(notesDocSnap.data()));
  } else {
    console.log("No such document!");
  }
}
