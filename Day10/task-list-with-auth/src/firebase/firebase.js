// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMhTqdsjQ6kJ_FataNbcaTjzlsJUdJ0Y0",
  authDomain: "ix-task-list-pink.firebaseapp.com",
  projectId: "ix-task-list-pink",
  storageBucket: "ix-task-list-pink.appspot.com",
  messagingSenderId: "303072001791",
  appId: "1:303072001791:web:57ead1de9effc30058d6ca",
  measurementId: "G-N43V99VMWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
};