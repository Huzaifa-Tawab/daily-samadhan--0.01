// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpzytAE8mJTiq0BQUYJS0iwuMrS4s4OyM",
  authDomain: "daily-samadhan-ccbae.firebaseapp.com",
  projectId: "daily-samadhan-ccbae",
  storageBucket: "daily-samadhan-ccbae.appspot.com",
  messagingSenderId: "462627547727",
  appId: "1:462627547727:web:f0249ce6fc5a63c165583a",
  measurementId: "G-6QG8G3PS48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);