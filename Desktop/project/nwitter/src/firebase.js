import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbBny3o9UHR5FgcZ4zaNex7OkvmWugaCk",
  authDomain: "nwitter-48d28.firebaseapp.com",
  projectId: "nwitter-48d28",
  storageBucket: "nwitter-48d28.appspot.com",
  messagingSenderId: "150512697468",
  appId: "1:150512697468:web:2bd0143d8fa670dcecc9f9",
};

const app = initializeApp(firebaseConfig);

export default app;
