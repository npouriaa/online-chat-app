import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2nLEsqvoTzN2jlJ528AkI64lXt1MSJdA",
  authDomain: "online-chat-app-c1f05.firebaseapp.com",
  projectId: "online-chat-app-c1f05",
  storageBucket: "online-chat-app-c1f05.appspot.com",
  messagingSenderId: "425029646790",
  appId: "1:425029646790:web:c7eea12fdde3e00e7e1ac7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()