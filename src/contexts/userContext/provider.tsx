import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { query, collection, where, getDocs, addDoc } from "firebase/firestore";
import { ReactNode, useEffect, useState } from "react";
import { UserContext } from ".";
import { auth, db, googleProvider } from "../../services/firebase";

interface ProviederProps {
  children: ReactNode;
};

export const USER_KEY = "@AuthFirebase:user"
export const USER_TOKEN = "@AuthFirebase:token"

export const UserContextProvider = ({ children }: ProviederProps) => {
  const [UserLogged, setUserLogged] = useState<User>()

  useEffect(() => {
    const sessionStorageAuth = () => {
      const sessionToken = sessionStorage.getItem(USER_TOKEN);
      const sessionUser = sessionStorage.getItem(USER_KEY);
      if (sessionToken && sessionUser) {
        setUserLogged(JSON.parse(sessionUser));
      }
    }
    sessionStorageAuth();
  }, [])

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken
        const user = result.user;
        const providerId = result.providerId;

        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
          await addDoc(collection(db, 'users'), {
            name: user.displayName,
            email: user.email,
            authProvider: providerId,
          })
        }

        setUserLogged(user)
        sessionStorage.setItem(USER_TOKEN, String(token));
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));

        console.log({ result, credential, providerId, token, user });

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential })
        return
      });
  };

  const signInWithGithub = async () => {

  };

  const signInWithApple = async () => {

  };

  const signInWithFacebook = async () => {

  };

  return (
    <UserContext.Provider value={{
      UserLogged,
      signInWithGoogle,
      signInWithGithub,
      signInWithApple,
      signInWithFacebook
    }}
    >
      {children}
    </UserContext.Provider>
  );
};