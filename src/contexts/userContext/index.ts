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

  createNewUser: ({ email, password, name }: NewAccountProps) => Promise<string>;
  signInWithEmail: ({ email, password }: signInWithEmailProps) => Promise<string>;
  signInWithGoogle: () => Promise<string>;
  signInWithGithub: () => Promise<string>;
  signInWithApple: () => Promise<string>;
  signInWithFacebook: () => Promise<string>;
  signOutTrigger: () => Promise<void>;
  resetPassword: (email: string) => Promise<string>;
}

export const UserContext = createContext<UserContextProps>({});