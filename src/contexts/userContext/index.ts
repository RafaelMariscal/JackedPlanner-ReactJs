import { User } from 'firebase/auth'
import { createContext } from 'react'

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
  UserLogged?: User | {};
  setUserLogged: React.Dispatch<React.SetStateAction<User | undefined>>;

  createNewUser: (email: string, password: string, name: string) => void;

  signInWithEmail: (email: string, password: string) => void;
  signInWithGoogle: () => void;
  signInWithGithub: () => void;
  signInWithApple: () => void;
  signInWithFacebook: () => void;


  signOutTrigger: () => void;
}

export const UserContext = createContext<UserContextProps>({});