import * as firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

export async function loginUser(email:string, password:string) {
  try {
    const res = await signInWithEmailAndPassword(authorise, email, password);
    return true
  } catch (error) {
    console.log('error')
    return false
  }
}


