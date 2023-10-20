// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQxYhcI6B_H_t1m7T2rWxwelY9EE9tLio",
  authDomain: "techgenius-95874.firebaseapp.com",
  projectId: "techgenius-95874",
  storageBucket: "techgenius-95874.appspot.com",
  messagingSenderId: "362387311074",
  appId: "1:362387311074:web:0977a0344d8c233c6951bb",
  measurementId: "G-RYT6ZCJ75M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);