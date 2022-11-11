import { User } from 'firebase/auth'
import { createContext } from 'react'

export interface signInWithEmailProps {
  email: string;
  password: string;
}

export interface UserContextProps {
  UserLogged?: User | {};
  isUserLoggedIn?: boolean;

  signInWithEmail?: ({ email, password }: signInWithEmailProps) => void;
  signInWithGoogle?: () => void;
  signInWithGithub?: () => void;
  signInWithApple?: () => void;
  signInWithFacebook?: () => void;

  signInAnonymously?: () => void;

  signOutTrigger?: () => void;
}

export const UserContext = createContext<UserContextProps>({});