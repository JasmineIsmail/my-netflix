// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUyd-5vEh9knm634aKawL8DFMXLQQfvPU",
  authDomain: "my-netflix-jasmine.firebaseapp.com",
  projectId: "my-netflix-jasmine",
  storageBucket: "my-netflix-jasmine.firebasestorage.app",
  messagingSenderId: "133624672450",
  appId: "1:133624672450:web:306052d510885493be8b5b",
  measurementId: "G-2NWBRB709M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();