// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7lm0rkuq3DM1o5WKWr6uKypjDxv_7MVU",
  authDomain: "fake-store-465f3.firebaseapp.com",
  projectId: "fake-store-465f3",
  storageBucket: "fake-store-465f3.appspot.com",
  messagingSenderId: "813361944300",
  appId: "1:813361944300:web:614568402f9748e63277c9",
};

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig));

export default auth;
