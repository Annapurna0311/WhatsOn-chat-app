import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAF_ypNmyhWBQIN8M9MjLhI5Zo1ngjwZK8",
  authDomain: "chat-app-60803.firebaseapp.com",
  projectId: "chat-app-60803",
  storageBucket: "chat-app-60803.appspot.com",
  messagingSenderId: "322276233045",
  appId: "1:322276233045:web:d7b51d6715dee1be8469dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
