// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwRCOqN6Y_0bUsoDCx0GOfoids737DwKs",
  authDomain: "jobportal-project-7792f.firebaseapp.com",
  projectId: "jobportal-project-7792f",
  storageBucket: "jobportal-project-7792f.firebasestorage.app",
  messagingSenderId: "992397915742",
  appId: "1:992397915742:web:11094d996ddef74f5126cf",
  measurementId: "G-NDRHZ24LJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
