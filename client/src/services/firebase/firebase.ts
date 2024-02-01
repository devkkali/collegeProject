// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz2vAE4rRHfFISAFioCp1-MXuDaGZomKU",
  authDomain: "thermal-glazing-412110.firebaseapp.com",
  projectId: "thermal-glazing-412110",
  storageBucket: "thermal-glazing-412110.appspot.com",
  messagingSenderId: "797015816171",
  appId: "1:797015816171:web:bc71f1252fbf8179df8bae",
  measurementId: "G-DVQQ7LTQ3H"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
// const analytics: Analytics = getAnalytics(app);
export const ourGoogleAuth: Auth = getAuth();
