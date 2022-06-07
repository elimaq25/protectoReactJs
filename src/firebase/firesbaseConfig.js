import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW_y-0NzI-WCQ0iaiupvVDeifpZgao-bQ",
  authDomain: "oblecom-9c6a2.firebaseapp.com",
  projectId: "oblecom-9c6a2",
  storageBucket: "oblecom-9c6a2.appspot.com",
  messagingSenderId: "36164469376",
  appId: "1:36164469376:web:7e7c4b49edd167e52b1c65"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 

