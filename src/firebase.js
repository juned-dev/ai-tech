import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { Config } from "./Config";

const firebaseConfig = {
  apiKey: `${Config.APIKEY}`,
  authDomain: `${Config.AUTHDOMAIN}`,
  databaseURL: `${Config.DATABASE_URL}`,
  projectId: `${Config.PROJECT_ID}`,
  storageBucket: `${Config.STORAGE_BUCKET}`,
  messagingSenderId: `${Config.MESSAGING_SENDER_ID}`,
  appId: `${Config.APP_ID}`,
  measurementId: `${Config.MEASUREMENT_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
