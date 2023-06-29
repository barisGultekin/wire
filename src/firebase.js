// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjGZjH5Ii0h4x0e-oYOJawvmA_twl6Qk",
  authDomain: "wire-573d3.firebaseapp.com",
  projectId: "wire-573d3",
  storageBucket: "wire-573d3.appspot.com",
  messagingSenderId: "951647517479",
  appId: "1:951647517479:web:dad7678d893595cfc58702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);