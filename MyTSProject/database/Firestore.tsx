import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0n2Qr2jauIk7zCUTL5QBoA7M-LHAjbfk",
  authDomain: "reactnativesignup-17007.firebaseapp.com",
  projectId: "reactnativesignup-17007",
  storageBucket: "reactnativesignup-17007.appspot.com",
  messagingSenderId: "144301622420",
  appId: "1:144301622420:web:6b9d358ef386c655146081",
  measurementId: "G-232RK0CQSY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, db, storage };
