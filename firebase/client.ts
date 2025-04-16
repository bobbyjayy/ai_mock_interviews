import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTBDL21HJq_wsAIapRRaJ_cFVcSQoZbI4",
  authDomain: "prepwise-dd75f.firebaseapp.com",
  projectId: "prepwise-dd75f",
  storageBucket: "prepwise-dd75f.firebasestorage.app",
  messagingSenderId: "913538827571",
  appId: "1:913538827571:web:d8df368c096fbb015aea46",
  measurementId: "G-E57GQ5ZDH7",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
