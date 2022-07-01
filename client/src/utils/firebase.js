// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG8eCE6u-ozeVBGARv4Z1OVPQq9JBZe1c",
  authDomain: "contact-app-ff97b.firebaseapp.com",
  databaseURL: "https://contact-app-ff97b-default-rtdb.firebaseio.com",
  projectId: "contact-app-ff97b",
  storageBucket: "contact-app-ff97b.appspot.com",
  messagingSenderId: "1070117752676",
  appId: "1:1070117752676:web:9f29a384282619face3471"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

