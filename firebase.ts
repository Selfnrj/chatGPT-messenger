// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2Ss-JKMOxx6cX6m_4BcSODzxZSmCf8w",
  authDomain: "chatgpt-messenger-4aff5.firebaseapp.com",
  projectId: "chatgpt-messenger-4aff5",
  storageBucket: "chatgpt-messenger-4aff5.appspot.com",
  messagingSenderId: "648656808715",
  appId: "1:648656808715:web:946e8589d2450d8dcdd00e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
