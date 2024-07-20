// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJZDns7FAmgz0E2Byy8oVluCjR9YlC7vc",
  authDomain: "recipe-finder-460f8.firebaseapp.com",
  projectId: "recipe-finder-460f8",
  storageBucket: "recipe-finder-460f8.appspot.com",
  messagingSenderId: "1086454595487",
  appId: "1:1086454595487:web:2c228ed3beccbf308487aa",
  measurementId: "G-H4CDE9BCL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
