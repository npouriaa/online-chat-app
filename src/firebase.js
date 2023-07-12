import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBIxXPVjxJ21nqRIDqqFjslnuEZOAH9vpM",
  authDomain: "chat-app-895bf.firebaseapp.com",
  projectId: "chat-app-895bf",
  storageBucket: "chat-app-895bf.appspot.com",
  messagingSenderId: "507050668036",
  appId: "1:507050668036:web:3fd64a3a70ca639e6c0551",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
