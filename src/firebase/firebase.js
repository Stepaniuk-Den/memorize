import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const API_KEY = import.meta.env.VITE_API_KEY;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "stden-memorize.firebaseapp.com",
  projectId: "stden-memorize",
  storageBucket: "stden-memorize.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: "G-ESFDJT097C",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const dbRef = ref;
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const storage = getStorage(app);
