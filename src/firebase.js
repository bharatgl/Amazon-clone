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
const firebaseConfig = {
  apiKey: "AIzaSyC0XhvOr7LRo4GYZrvO2EGWVDYcgQQVCaM",
  authDomain: "clone-bg.firebaseapp.com",
  projectId: "clone-bg",
  storageBucket: "clone-bg.appspot.com",
  messagingSenderId: "356043029817",
  appId: "1:356043029817:web:2cca0c3e82d6f6c067bce8",
  measurementId: "G-K0Y9EJLYM2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const database = getDatabase(app);

export { database, auth, app };
