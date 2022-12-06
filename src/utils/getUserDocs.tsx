import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { UserPlannersProps } from "../@types/PlannerProps";
import { USER_PLANNERS } from "../contexts/userContext/provider";
import { db } from "../services/firebase";
import { plannersConverter } from "./typesConverters";

interface getUserDocsDataProps {
  user: User
  setPlanners: (planners: UserPlannersProps) => void
}

export async function getUserDocsData ({ user, setPlanners }:getUserDocsDataProps) {
  const plannersDocRef = doc(db, "planners", user.uid)
    .withConverter(plannersConverter);
  const plannersDocSnap = await getDoc(plannersDocRef);

  if (plannersDocSnap.exists()) {
    setPlanners(plannersDocSnap.data());
    sessionStorage.setItem(USER_PLANNERS,
      JSON.stringify(plannersDocSnap.data()));
  } else {
    console.log("No such document!");
  }
}
