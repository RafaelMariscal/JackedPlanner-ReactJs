import { QueryDocumentSnapshot } from "firebase/firestore";
import { UserProps } from "../@types/UserProps";

export const userConverter = {
  toFirestore: (data: UserProps) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<UserProps>) =>
    snap.data() as UserProps
};
