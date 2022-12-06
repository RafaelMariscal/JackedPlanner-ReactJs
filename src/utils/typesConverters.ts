import { QueryDocumentSnapshot } from "firebase/firestore";
import { UserProps } from "../@types/UserProps";
import { NotesProps } from "../@types/NotesProps";
import { UserPlannersProps } from "../@types/PlannerProps";

export const userConverter = {
  toFirestore: (data: UserProps) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<UserProps>) =>
    snap.data() as UserProps
};

export const notesConverter = {
  toFirestore: (data: NotesProps) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<NotesProps>) =>
    snap.data() as NotesProps
};

export const plannersConverter = {
  toFirestore: (data: UserPlannersProps) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<UserPlannersProps>) =>
    snap.data() as UserPlannersProps
};
