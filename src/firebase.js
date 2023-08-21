import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3qXysR04xBDYsUNEmBXRg5RLBnlsMjxQ",
  authDomain: "chat-app-e2fed.firebaseapp.com",
  projectId: "chat-app-e2fed",
  storageBucket: "chat-app-e2fed.appspot.com",
  messagingSenderId: "223370971791",
  appId: "1:223370971791:web:058cc67f7a7820687f3efa"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()