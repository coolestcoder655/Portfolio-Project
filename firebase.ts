// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjjh1mePjkVmSq6jSQLQ99bsqIPHuotLU",
  authDomain: "portfolio-ff4f6.firebaseapp.com",
  projectId: "portfolio-ff4f6",
  storageBucket: "portfolio-ff4f6.firebasestorage.app",
  messagingSenderId: "44240859214",
  appId: "1:44240859214:web:094f0ab145c1910cde931f",
  measurementId: "G-FLETQXV0G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };