import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4Uvi5UxxxnNmzhoF4kioQswtjrm9_3s0",
  authDomain: "portfolio-bb8a8.firebaseapp.com",
  projectId: "portfolio-bb8a8",
  storageBucket: "portfolio-bb8a8.appspot.com",
  messagingSenderId: "869473169336",
  appId: "1:869473169336:web:925a9edc41b0132527e94d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Uvi5UxxxnNmzhoF4kioQswtjrm9_3s0",
  authDomain: "portfolio-bb8a8.firebaseapp.com",
  projectId: "portfolio-bb8a8",
  storageBucket: "portfolio-bb8a8.appspot.com",
  messagingSenderId: "869473169336",
  appId: "1:869473169336:web:925a9edc41b0132527e94d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
 */
