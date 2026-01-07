// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO2aMU6lbYLdtOaL0tRwFDMrY03N8Tp4s",
  authDomain: "netflixgpt-87cfc.firebaseapp.com",
  projectId: "netflixgpt-87cfc",
  storageBucket: "netflixgpt-87cfc.firebasestorage.app",
  messagingSenderId: "310347978902",
  appId: "1:310347978902:web:83e38372c5412c79388ab7",
  measurementId: "G-DN0V7SVQZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();