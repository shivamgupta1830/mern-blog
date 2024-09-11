// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-dahboard-blog.firebaseapp.com",
  projectId: "mern-dahboard-blog",
  storageBucket: "mern-dahboard-blog.appspot.com",
  messagingSenderId: "1090862769175",
  appId: "1:1090862769175:web:ed5cf8bc6bcf78bbde6852",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
