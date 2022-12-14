import { ReactNode, useEffect, useState } from "react";
import { NewAccountProps, signInWithEmailProps, UserContext } from ".";
import { auth, db, facebookProvider, githubProvider, googleProvider } from "../../services/firebase";
import { createNewUserStandardDocs } from "../../utils/createNewUserStandartDocs";
import { doc, getDoc } from "firebase/firestore";
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
import { UserPlannersProps } from "../../@types/PlannerProps";
import { getUserDocsData } from "../../utils/getUserDocs";

interface ProviederProps {
  children: ReactNode;
}

export const USER_KEY = "@AuthFirebase:user";   // maybe USER_DATA ??
export const USER_TOKEN = "@AuthFirebase:token";
export const USER_ACCESS_TOKEN = "@AuthFirebase:accessToken";
export const USER_PLANNERS = "@FirestoreFirebase:planners";

export const UserContextProvider = ({ children }: ProviederProps) => {
  const [UserLogged, setUserLogged] = useState<User>();
  const [Planners, setPlanners] = useState<UserPlannersProps>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const sessionStorageAuth = () => {
      const sessionToken = sessionStorage.getItem(USER_TOKEN);
      const sessionUser = sessionStorage.getItem(USER_KEY);
      const sessionPlanner = sessionStorage.getItem(USER_PLANNERS);
      if (!!sessionToken && !!sessionUser && !!sessionPlanner) {
        setUserLogged(JSON.parse(sessionUser));
        setPlanners(JSON.parse(sessionPlanner));
      }
    };
    sessionStorageAuth();
  }, []);

  const createNewUser = async ({ email, password, name }: NewAccountProps) => {
    setIsLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        const user = result.user;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.data() === undefined) {
          await createNewUserStandardDocs({user, name, providerId: user.providerId});
        }
        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(user.uid));
        await getUserDocsData({ user, setPlanners });
        return "New user created";
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error });
        return errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
  };

  const signInWithEmail = async ({ email, password }: signInWithEmailProps) => {
    setIsLoading(true);
    return await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = userCredential.user.getIdTokenResult();

        setUserLogged(user);
        sessionStorage.setItem(USER_TOKEN, String(token));
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        await getUserDocsData({ user, setPlanners });
        return "sign in successfull";
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        console.log({ error });
        return errorCode.slice(5).replace(/-(?!>)/g, " ");
      });
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
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
          await createNewUserStandardDocs({user,providerId});
          console.log("New user created");
          message = "New user created";
        }
        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        sessionStorage.setItem(USER_ACCESS_TOKEN, String(accessToken));
        await getUserDocsData({ user, setPlanners });

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
    setIsLoading(true);
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
          await createNewUserStandardDocs({user,providerId});
          console.log("New user created");
          message = "New user created";
        }

        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        sessionStorage.setItem(USER_ACCESS_TOKEN, String(accessToken));
        await getUserDocsData({ user, setPlanners });

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
    setIsLoading(true);
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
          await createNewUserStandardDocs({user,providerId});
          console.log("New user created");
          message = "New user created";
        }

        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        sessionStorage.setItem(USER_ACCESS_TOKEN, String(accessToken));
        await getUserDocsData({ user, setPlanners });

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
    setIsLoading(true);
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
          await createNewUserStandardDocs({user,providerId});
          console.log("New user created");
          message = "New user created";
        }

        setUserLogged(user);
        sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        sessionStorage.setItem(USER_TOKEN, String(uidToken));
        console.log("User logged succesfully");
        await getUserDocsData({ user, setPlanners });

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
    setIsLoading(true);
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
      Planners,
      setPlanners,
      isLoading,
      setIsLoading,
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
