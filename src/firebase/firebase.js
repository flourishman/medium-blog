import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/auth";
import { db } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj6b6DRrLDQKnvaqT82iA_lr2MG7YoYkA",
  authDomain: "fir-blog-1007e.firebaseapp.com",
  projectId: "fir-blog-1007e",
  storageBucket: "fir-blog-1007e.appspot.com",
  messagingSenderId: "497884027785",
  appId: "1:497884027785:web:2518772d1cf181c6005f58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
