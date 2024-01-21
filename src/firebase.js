// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJWwBjtiIFBUNX4HL4xMXJEdk9qqKHP2k",
  authDomain: "reactfirebaseauth-8a967.firebaseapp.com",
  projectId: "reactfirebaseauth-8a967",
  storageBucket: "reactfirebaseauth-8a967.appspot.com",
  messagingSenderId: "207031550306",
  appId: "1:207031550306:web:d5d0d93599e7fcfd24ac3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);