import * as firebase from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "./toast";

const config = {
  apiKey: "AIzaSyCOw86gitu12oi9zfhmidiOg4vqRaheovI",
  authDomain: "app1-406916.firebaseapp.com",
  projectId: "app1-406916",
  storageBucket: "app1-406916.appspot.com",
  messagingSenderId: "564816051795",
  appId: "1:564816051795:web:3095e7257d2d060eb250a6",
  measurementId: "G-B8SG2PPKZ0",
};

firebase.initializeApp(config);
const authorise = getAuth();

export async function loginUser(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(authorise, email, password);
    return true;
  } catch (error) {
    toast("Error logging you in!");
    return false;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(
      authorise,
      email,
      password
    );
    return true;
  } catch (error) {
    toast("Error registering you in, try again!");
    return false;
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(authorise, function (user) {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
}
