import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { UserPlannersProps } from "../@types/PlannerProps";
import { USER_PLANNERS } from "../contexts/userContext/provider";
import { db } from "../services/firebase";
import { plannersConverter } from "./typesConverters";

export async function updatePlannersCollection(
  user: User,
  updatedPlanners: UserPlannersProps,
  setPlanners: (planners: UserPlannersProps)=> void
){
  await setDoc(doc(db, "planners", user.uid)
    .withConverter(plannersConverter), updatedPlanners);
  sessionStorage.setItem(USER_PLANNERS,
    JSON.stringify(updatedPlanners));

  if(setPlanners) setPlanners(updatedPlanners);
}
