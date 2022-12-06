import { QueryDocumentSnapshot } from "firebase/firestore";
import { UserProps } from "../@types/UserProps";
import { UserPlannersProps } from "../@types/PlannerProps";

export const userConverter = {
  toFirestore: (data: UserProps) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<UserProps>) =>
    snap.data() as UserProps
};

export const plannersConverter = {
  toFirestore: (data: UserPlannersProps) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<UserPlannersProps>) =>
    snap.data() as UserPlannersProps
};
