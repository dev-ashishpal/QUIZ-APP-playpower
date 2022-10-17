// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJjZ8z0sQp-vtIcGEWFlkyHLmDIfAJctc",
  authDomain: "playpower-b2966.firebaseapp.com",
  projectId: "playpower-b2966",
  storageBucket: "playpower-b2966.appspot.com",
  messagingSenderId: "553076808103",
  appId: "1:553076808103:web:d40296f7a97c8e7532be82",
  measurementId: "G-JCPS9MJ9Q8",
};

// export let app;
// Initialize Firebase
// if (getApps().length) {
//   app = getApp();
// } else {
//   app = initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);
// export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
