import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { USER_NOTES, USER_PLANNERS } from "../contexts/userContext/provider";
import { db } from "../services/firebase";
import { plannersConverter, notesConverter } from "./typesConverters";

export async function getUserDocsData (UserLogged:User) {
  const plannersDocRef = doc(db, "planners", UserLogged.uid)
    .withConverter(plannersConverter);
  const plannersDocSnap = await getDoc(plannersDocRef);

  const notesDocRef = doc(db, "notes", UserLogged.uid)
    .withConverter(notesConverter);
  const notesDocSnap = await getDoc(notesDocRef);

  if (plannersDocSnap.exists() && notesDocSnap.exists()) {
    sessionStorage.setItem(USER_PLANNERS,
      JSON.stringify(plannersDocSnap.data()));
    sessionStorage.setItem(USER_NOTES,
      JSON.stringify(notesDocSnap.data()));
  } else {
    console.log("No such document!");
  }
}
