// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZWKRe3zEhKu297gUTBUwKhpvXDcwV3Is",
  authDomain: "viso-luana-garcia.firebaseapp.com",
  projectId: "viso-luana-garcia",
  storageBucket: "viso-luana-garcia.appspot.com",
  messagingSenderId: "275014390982",
  appId: "1:275014390982:web:a62f2dd4a815108c7e33c7",
  measurementId: "G-74EDEY58TS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
