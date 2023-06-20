// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider,FacebookAuthProvider,getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdl8quRMFFoHE0BybxOFVyyPtE_sH5N9o",
  authDomain: "chatter-1aa84.firebaseapp.com",
  projectId: "chatter-1aa84",
  storageBucket: "chatter-1aa84.appspot.com",
  messagingSenderId: "93138425602",
  appId: "1:93138425602:web:f68f5abd04f56782e6941b",
  measurementId: "G-3VXF3ZEHE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const faceBookProvider = new FacebookAuthProvider()
export const analytics = getAnalytics(app);
