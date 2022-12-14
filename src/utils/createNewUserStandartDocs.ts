import { User } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { createNewUserStandardPlanners } from "./createStandardPlanners";
import { plannersConverter, userConverter } from "./typesConverters";

interface createNewUserStandardDocsProps {
  user: User
  name?: string
  providerId: string | null
}

export async function createNewUserStandardDocs({ user, name, providerId}: createNewUserStandardDocsProps) {
  await setDoc(doc(db, "users", user.uid).withConverter(userConverter), {
    name: name ? name : user.displayName,
    email: user.email,
    authProvider: providerId,
    createdAt: Timestamp.fromDate(new Date()),
    subscribed: false,
  });
  await setDoc(doc(db, "planners", user.uid)
    .withConverter(plannersConverter), createNewUserStandardPlanners());
  return;
}
