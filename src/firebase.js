import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyJon_R1hHByCBnmx6lNiUU9LTubObEr8",
  authDomain: "chat-5f34c.firebaseapp.com",
  projectId: "chat-5f34c",
  storageBucket: "chat-5f34c.appspot.com",
  messagingSenderId: "403241129814",
  appId: "1:403241129814:web:20fa476df1964ed6b6a8f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

// export {app, auth, storage, db}
