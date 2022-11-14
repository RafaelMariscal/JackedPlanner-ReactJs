import { ReactNode, useEffect, useState } from "react";
import { NewAccountProps, signInWithEmailProps, UserContext } from ".";
import { auth, db, googleProvider } from "../../services/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

interface ProviederProps {
  children: ReactNode;
};

export const USER_KEY = "@AuthFirebase:user"
export const USER_TOKEN = "@AuthFirebase:token"
export const USER_ACCESS_TOKEN = "@AuthFirebase:accessToken"

export const UserContextProvider = ({ children }: ProviederProps) => {
  const [UserLogged, setUserLogged] = useState<User>()

  useEffect(() => {
    const sessionStorageAuth = () => {
      const sessionToken = sessionStorage.getItem(USER_TOKEN)
      const sessionUser = sessionStorage.getItem(USER_KEY);
      if (!!sessionToken && !!sessionUser) {
        setUserLogged(JSON.parse(sessionUser));
      }
    }
    sessionStorageAuth();
  }, [])

  const createNewUser = async ({ email, password, name }: NewAccountProps) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const user = result.user;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.data() === undefined) {
          await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: user.email,
            authProvider: user.providerId
          })
        }
        setUserLogged(user)
        sessionStorage.setItem(USER_TOKEN, String(user.uid));
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        return "New user created";
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error })
        return errorCode.slice(5).replace(/-(?!>)/g, ' ')
      })
  }

  const signInWithEmail = async ({ email, password }: signInWithEmailProps) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const token = userCredential.user.getIdTokenResult()

        setUserLogged(user)
        sessionStorage.setItem(USER_TOKEN, String(token));
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        return "sign in successfull"
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error })
        return errorCode.slice(5).replace(/-(?!>)/g, ' ')
      })
  }

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken
        const user = result.user;
        const uidToken = user.uid
        const providerId = result.providerId;

        const docRef = doc(db, "users", uidToken);
        const docSnap = await getDoc(docRef)

        if (docSnap.data() === undefined) {
          await setDoc(doc(db, "users", uidToken), {
            name: user.displayName,
            email: user.email,
            authProvider: providerId
          })
          console.log(`New user created`);
        }

        setUserLogged(user)
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        sessionStorage.setItem(USER_ACCESS_TOKEN, String(accessToken));
        console.log(`User logged succesfully`);

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, credential })
        return
      });
  };

  const signInWithGithub = async () => {

  };

  const signInWithApple = async () => {

  };

  const signInWithFacebook = async () => {

  };

  const signOutTrigger = async () => {
    sessionStorage.clear()
    signOut(auth)
      .then(() => {
        setUserLogged(undefined);
        sessionStorage.clear();
        console.log('User logout successfully!')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const resetPassword = async (email: string) => {
    return await sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result)
        return "Password reset email sent!"
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error })
        return errorCode.slice(5).replace(/-(?!>)/g, ' ')
      })
  }

  return (
    <UserContext.Provider value={{
      UserLogged,
      setUserLogged,
      createNewUser,
      signInWithEmail,
      signInWithGoogle,
      signInWithGithub,
      signInWithApple,
      signInWithFacebook,
      signOutTrigger,
      resetPassword
    }}
    >
      {children}
    </UserContext.Provider>
  );
};