import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIOL40QwvwceRlQi80go3GNkw49RqHoK4",
  authDomain: "stden-memorize.firebaseapp.com",
  projectId: "stden-memorize",
  storageBucket: "stden-memorize.appspot.com",
  messagingSenderId: "750001716136",
  appId: "1:750001716136:web:bc2ffaeed36b45087f7b9d",
  measurementId: "G-ESFDJT097C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
