import { User } from 'firebase/auth'
import { createContext } from 'react'

export interface UserContextProps {
  UserLogged?: User | {};
  isUserLoggedIn?: boolean

  signInWithGoogle?: () => void;
  signInWithGithub?: () => void;
  signInWithApple?: () => void;
  signInWithFacebook?: () => void;

  signOutTrigger?: () => void;
}

export const UserContext = createContext<UserContextProps>({});