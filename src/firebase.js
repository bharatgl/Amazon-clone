// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// import { db } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7f6eTgvRVQ4q30iwvKz7lotTXjQKBB4k",
  authDomain: "clone-b540c.firebaseapp.com",
  projectId: "clone-b540c",
  storageBucket: "clone-b540c.appspot.com",
  messagingSenderId: "306512930817",
  appId: "1:306512930817:web:5e363a09e698264fa43800",
  measurementId: "G-HN865LQHSM",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const database = getDatabase(app);

export { database, auth, app };
