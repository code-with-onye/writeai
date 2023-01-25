// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAenAN_h1r0mO3GIPLywaBWRFXWTi2nRc0",
  authDomain: "kitewriter-e3509.firebaseapp.com",
  projectId: "kitewriter-e3509",
  storageBucket: "kitewriter-e3509.appspot.com",
  messagingSenderId: "866373072673",
  appId: "1:866373072673:web:6a3be68f2c98249068f060",
  measurementId: "G-VKFVXQPQ98",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
