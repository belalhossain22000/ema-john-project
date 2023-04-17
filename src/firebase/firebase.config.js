// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTchMyhCjy0rhxPw8r0P-jdeFcLXMtrMs",
  authDomain: "ema-jhom-with-firebase.firebaseapp.com",
  projectId: "ema-jhom-with-firebase",
  storageBucket: "ema-jhom-with-firebase.appspot.com",
  messagingSenderId: "692361567508",
  appId: "1:692361567508:web:e624fb7bb5cce60e5b7601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;