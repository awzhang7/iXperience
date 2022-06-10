// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8nvmG5qRniBm55VbbR5trRWhrtp0f6Pg",
  authDomain: "ix-task-list-f1543.firebaseapp.com",
  projectId: "ix-task-list-f1543",
  storageBucket: "ix-task-list-f1543.appspot.com",
  messagingSenderId: "280194003187",
  appId: "1:280194003187:web:dbe8aea029c8f217ba0786",
  measurementId: "G-LKZTTLZ8W0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export{
    db
};