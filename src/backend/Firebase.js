// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "puptop-8cb24.firebaseapp.com",
  projectId: "puptop-8cb24",
  storageBucket: "puptop-8cb24.appspot.com",
  messagingSenderId: "1029648703708",
  appId: "1:1029648703708:web:1382d40b0befa521351419",
  measurementId: "G-VVXZM1BE45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
