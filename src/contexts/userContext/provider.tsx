import { ReactNode, useEffect, useState } from "react";
import { NewAccountProps, signInWithEmailProps, UserContext } from ".";
import { auth, db, facebookProvider, githubProvider, googleProvider } from "../../services/firebase";
import { doc, setDoc, getDoc, Timestamp, } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  signInAnonymously,
} from "firebase/auth";
import { userConverter } from "../../utils/typesConverters";

interface ProviederProps {
  children: ReactNode;
}

export const USER_KEY = "@AuthFirebase:user";
export const USER_TOKEN = "@AuthFirebase:token";
export const USER_ACCESS_TOKEN = "@AuthFirebase:accessToken";

export const UserContextProvider = ({ children }: ProviederProps) => {
  const [UserLogged, setUserLogged] = useState<User>();

  useEffect(() => {
    const sessionStorageAuth = () => {
      const sessionToken = sessionStorage.getItem(USER_TOKEN);
      const sessionUser = sessionStorage.getItem(USER_KEY);
      if (!!sessionToken && !!sessionUser) {
        setUserLogged(JSON.parse(sessionUser));
      }
    };
    sessionStorageAuth();
  }, []);

  const createNewUser = async ({ email, password, name }: NewAccountProps) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const user = result.user;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.data() === undefined) {
          await setDoc(doc(db, "users", user.uid).withConverter(userConverter), {
            name: name,
            email: user.email,
            authProvider: user.providerId,
            createdAt: Timestamp.fromDate(new Date()),
            subscribed: false,
          });
        }
        setUserLogged(user);
        sessionStorage.setItem(USER_TOKEN, String(user.uid));
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        return "New user created";
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error });
        return errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
  };

  const signInWithEmail = async ({ email, password }: signInWithEmailProps) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const token = userCredential.user.getIdTokenResult();

        setUserLogged(user);
        sessionStorage.setItem(USER_TOKEN, String(token));
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        return "sign in successfull";
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error });
        return errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
  };

  const signInWithGoogle = async () => {
    let message = "";
    await signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        const user = result.user;
        const uidToken = user.uid;
        const providerId = result.providerId;

        const docRef = doc(db, "users", uidToken);
        const docSnap = await getDoc(docRef);

        message = "User logged succesfully";
        if (docSnap.data() === undefined) {
          await setDoc(doc(db, "users", uidToken).withConverter(userConverter), {
            name: user.displayName,
            email: user.email,
            authProvider: providerId,
            createdAt: Timestamp.fromDate(new Date()),
            subscribed: false,
          });
          console.log("New user created");
          message = "New user created";
        }

        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        sessionStorage.setItem(USER_ACCESS_TOKEN, String(accessToken));
        console.log("User logged succesfully");
        return message;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log({ error });
        return message = errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
    return message;
  };

  const signInWithGithub = async () => {
    let message = "";
    await signInWithPopup(auth, githubProvider)
      .then(async (result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        const user = result.user;
        const uidToken = user.uid;
        const providerId = result.providerId;

        const docRef = doc(db, "users", uidToken);
        const docSnap = await getDoc(docRef);

        message = "User logged succesfully";
        if (docSnap.data() === undefined) {
          await setDoc(doc(db, "users", uidToken).withConverter(userConverter), {
            name: user.displayName,
            email: user.email,
            authProvider: providerId,
            createdAt: Timestamp.fromDate(new Date()),
            subscribed: false,
          });
          console.log("New user created");
          message = "New user created";
        }

        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        sessionStorage.setItem(USER_ACCESS_TOKEN, String(accessToken));
        console.log("User logged succesfully");
        return message;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log({ error });
        return message = errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
    return message;
  };

  const signInWithFacebook = async () => {
    let message = "";
    await signInWithPopup(auth, facebookProvider)
      .then(async (result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        const user = result.user;
        const uidToken = user.uid;
        const providerId = result.providerId;

        const docRef = doc(db, "users", uidToken);
        const docSnap = await getDoc(docRef);

        message = "User logged succesfully";
        if (docSnap.data() === undefined) {
          await setDoc(doc(db, "users", uidToken).withConverter(userConverter), {
            name: user.displayName,
            email: user.email,
            authProvider: providerId,
            createdAt: Timestamp.fromDate(new Date()),
            subscribed: false,
          });
          console.log("New user created");
          message = "New user created";
        }

        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        sessionStorage.setItem(USER_ACCESS_TOKEN, String(accessToken));
        console.log("User logged succesfully");
        return message;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log({ error });
        return message = errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
    return message;
  };

  const signWithAnonymousProvider = async () => {
    let message = "";
    await signInAnonymously(auth)
      .then(async (result) => {
        const user = result.user;
        const uidToken = user.uid;
        const providerId = result.providerId;

        const docRef = doc(db, "users", uidToken);
        const docSnap = await getDoc(docRef);

        message = "User logged succesfully";
        if (docSnap.data() === undefined) {
          await setDoc(doc(db, "users", uidToken).withConverter(userConverter), {
            name: user.displayName,
            email: user.email,
            authProvider: providerId,
            createdAt: Timestamp.fromDate(new Date()),
            subscribed: false,
          });
          console.log("New user created");
          message = "New user created";
        }

        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        console.log("User logged succesfully");
        return message;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log({ error });
        return message = errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
    return message;
  };

  const signOutTrigger = async () => {
    sessionStorage.clear();
    signOut(auth)
      .then(() => {
        setUserLogged(undefined);
        sessionStorage.clear();
        console.log("User logout successfully!");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const resetPassword = async (email: string) => {
    return await sendPasswordResetEmail(auth, email)
      .then((result) => {
        console.log(result);
        return "Password reset email sent!";
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error });
        return errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
  };

  const updateUserProps = async () => {
    const message = "";
    return message;
  };

  const updatePassword = async () => {
    const message = "";
    return message;
  };

  return (
    <UserContext.Provider value={{
      UserLogged,
      setUserLogged,
      createNewUser,
      signInWithEmail,
      signInWithGoogle,
      signInWithGithub,
      signInWithFacebook,
      signWithAnonymousProvider,
      signOutTrigger,
      resetPassword
    }}
    >
      {children}
    </UserContext.Provider>
  );
};
