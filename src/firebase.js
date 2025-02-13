import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBrYI2qgqfcdvET7zxJTX63oLJD6VBlqf0",
  authDomain: "blog-cfbb2.firebaseapp.com",
  projectId: "blog-cfbb2",
  storageBucket: "blog-cfbb2.firebasestorage.app",
  messagingSenderId: "509431747876",
  appId: "1:509431747876:web:12d92cfb7c929a0c528fb1",
  measurementId: "G-JWRT7ZKZPS",
});

const fb = firebase;

export default fb;
