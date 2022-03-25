// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFIoy5OzKhNlSed-Zq-3nXaudWzApgS4A",
  authDomain: "authreactnative-1b2df.firebaseapp.com",
  projectId: "authreactnative-1b2df",
  storageBucket: "authreactnative-1b2df.appspot.com",
  messagingSenderId: "284339471316",
  appId: "1:284339471316:web:5b7154fc914e7c948f0c41",
  measurementId: "G-JCM7M2XWF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
//We’ll import db anytime we need to access the database.
export const auth = getAuth();
//We’ll import auth anytime we need to authenticate with Firebase.
export const provider = new GoogleAuthProvider();
//We’ll import provider anytime we need to authenticate with Google.
