// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDt4Mvj-U7blXiV15DPsfzH2U4OuNxjFp8",
  authDomain: "ai-technologies-website-22a10.firebaseapp.com",
  databaseURL: "https://ai-technologies-website-22a10-default-rtdb.firebaseio.com",
  projectId: "ai-technologies-website-22a10",
  storageBucket: "ai-technologies-website-22a10.appspot.com",
  messagingSenderId: "474191953367",
  appId: "1:474191953367:web:ed86327d1cb05298a75f92",
  measurementId: "G-NR3FY6W735",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export default { storage, db };
