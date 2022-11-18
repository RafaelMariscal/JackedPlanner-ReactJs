import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInAnonymously, User } from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { auth, googleProvider, db, githubProvider, facebookProvider } from ".";
import { USER_KEY, USER_TOKEN, USER_ACCESS_TOKEN } from "../../contexts/userContext/provider";
import { userConverter } from "../../utils/typesConverters";

type setUserLoggedProps = React.Dispatch<React.SetStateAction<User | undefined>>

export const signInWithGoogle = async (setUserLogged: setUserLoggedProps) => {
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

export const signInWithGithub = async (setUserLogged: setUserLoggedProps) => {
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

export const signInWithFacebook = async (setUserLogged: setUserLoggedProps) => {
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

export const signWithAnonymousProvider = async (setUserLogged: setUserLoggedProps) => {
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
