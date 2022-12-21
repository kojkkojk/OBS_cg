// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCql12R9I2ilYR8bck9gg_BfoxW9Fjr7S4",
  authDomain: "snowball-hknu.firebaseapp.com",
  databaseURL: "https://snowball-hknu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snowball-hknu",
  storageBucket: "snowball-hknu.appspot.com",
  messagingSenderId: "657122444356",
  appId: "1:657122444356:web:9a8574a7385b8ac7746811",
  measurementId: "G-MWG1KD4KNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);