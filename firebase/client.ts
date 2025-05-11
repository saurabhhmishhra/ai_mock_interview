import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOGbytThRm0Ba-WrEr_pu9JvbzdnhyrTk",
  authDomain: "prepwise-f0d07.firebaseapp.com",
  projectId: "prepwise-f0d07",
  storageBucket: "prepwise-f0d07.firebasestorage.app",
  messagingSenderId: "58230692010",
  appId: "1:58230692010:web:4502df6037ca1618b418d3",
  measurementId: "G-R2SG83ZP6H"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);