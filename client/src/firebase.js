// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e9e7d.firebaseapp.com",
  projectId: "mern-blog-e9e7d",
  storageBucket: "mern-blog-e9e7d.appspot.com",
  messagingSenderId: "392193450631",
  appId: "1:392193450631:web:a2ba919124f2e576100e22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
