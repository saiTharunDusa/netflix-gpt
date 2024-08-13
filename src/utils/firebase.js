// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2WCfE7seeS_F_U3MHgte2Dfaky-vMCyU",
  authDomain: "netflixgpt-f08bf.firebaseapp.com",
  projectId: "netflixgpt-f08bf",
  storageBucket: "netflixgpt-f08bf.appspot.com",
  messagingSenderId: "742533463073",
  appId: "1:742533463073:web:19fbc29ad60d8c1a70f760",
  measurementId: "G-7TNYN17FVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
