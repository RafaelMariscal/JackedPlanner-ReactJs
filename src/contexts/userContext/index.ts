import { User } from "firebase/auth";
import { createContext } from "react";
import { NotesProps } from "../../@types/NotesProps";
import { UserPlannersProps } from "../../@types/PlannerProps";

export interface signInWithEmailProps {
  email: string;
  password: string;
}

export interface NewAccountProps {
  name: string;
  email: string;
  password: string;
}

export interface UserContextProps {
  UserLogged?: User;
  setUserLogged?: React.Dispatch<React.SetStateAction<User | undefined>>;
  Planners: UserPlannersProps | undefined
  setPlanners: React.Dispatch<React.SetStateAction<UserPlannersProps | undefined>>
  Notes: NotesProps | undefined
  setNotes: React.Dispatch<React.SetStateAction<NotesProps | undefined>>


  isLoading: boolean
  setIsLoading: (i:boolean) => void

  createNewUser?: ({ email, password, name }: NewAccountProps) => Promise<string>;
  signInWithEmail?: ({ email, password }: signInWithEmailProps) => Promise<string>;
  signInWithGoogle?: () => Promise<string>;
  signInWithGithub?: () => Promise<string>;
  signInWithFacebook?: () => Promise<string>;
  signWithAnonymousProvider?: () => Promise<string>;
  signOutTrigger?: () => Promise<void>;
  resetPassword?: (email: string) => Promise<string>;
}

export const UserContext = createContext<UserContextProps>({});
