import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAQ-RncJaAROE91UiZd2kXLw0C6wpuyKs",
  authDomain: "chat-app-react-b35e2.firebaseapp.com",
  projectId: "chat-app-react-b35e2",
  storageBucket: "chat-app-react-b35e2.appspot.com",
  messagingSenderId: "314630288995",
  appId: "1:314630288995:web:8587ffefd6d9837a36aa56"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()