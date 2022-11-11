// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD8agjf8y9PLqKgh4ipe8bIw2qlPh0ksE",
  authDomain: "firstfibre-project.firebaseapp.com",
  projectId: "firstfibre-project",
  storageBucket: "firstfibre-project.appspot.com",
  messagingSenderId: "1099400135235",
  appId: "1:1099400135235:web:f5a58ad4c32aaeb7038af6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;