// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');

export const db = getFirestore(app);