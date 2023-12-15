import * as firebase from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
  signInWithCredential
} from "firebase/auth";
import { collection, getFirestore, addDoc, doc, getDoc } from 'firebase/firestore'
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "./toast";

var firebaseConfig = {
  apiKey: "AIzaSyCOw86gitu12oi9zfhmidiOg4vqRaheovI",
  authDomain: "app1-406916.firebaseapp.com",
  projectId: "app1-406916",
  storageBucket: "app1-406916.appspot.com",
  messagingSenderId: "564816051795",
  appId: "1:564816051795:web:3095e7257d2d060eb250a6",
  measurementId: "G-B8SG2PPKZ0",
};

const app = firebase.initializeApp(firebaseConfig);
const authorise = getAuth(app);
const db = getFirestore(app);

export async function loginUser(email: string, password: string) {
  try {
    var userCredential = await signInWithEmailAndPassword(
      authorise,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    toast("Error logging you in!");
    console.log(false);
    return false;
  }
}

export async function registerUser(name: string, dob: string,email: string, password: string, role: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authorise,
      email,
      password
    );
    const user = userCredential.user

    sendEmailVerification(user)

    await addDoc(collection(db, 'user-data'), {
      name: name,
      dob: dob,
      email: email,
      role:role,
    })
    
    return user;
  } catch (error) {
    console.error('Error signing up!', error);
    throw error;
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

export async function signIn(email:string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(authorise, email, password);
    const user = userCredential.user;

    // Retrieve user role from Firestore
    const userDocRef = doc(db, 'user-data', user.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const role = userDocSnapshot.data().role;
      // Redirect based on role
      if (role === 'manager') {
        // Redirect to manager dashboard
      } else if (role === 'user') {
        // Redirect to user dashboard
        window.location.href = '/user-dashboard';
      }
    }


    return user;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error; // You can handle this error in your UI
  }
}