// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyT_f4_PlnVsKBuB9kFiUNk0W4O3Gk6T8",
  authDomain: "portfolio-89df1.firebaseapp.com",
  projectId: "portfolio-89df1",
  storageBucket: "portfolio-89df1.appspot.com",
  messagingSenderId: "345451881145",
  appId: "1:345451881145:web:187986719f6ddb05837168",
  measeurement: "G-MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicia o Analytics
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db, analytics};