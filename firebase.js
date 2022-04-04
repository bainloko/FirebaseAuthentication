/*
* @bainloko
* DDM II
* 03/04/2022 
*/

// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUTWNElxxucFBtn8HI8TqZo9tURxaddto",
  authDomain: "fir-auth-81feb.firebaseapp.com",
  projectId: "fir-auth-81feb",
  storageBucket: "fir-auth-81feb.appspot.com",
  messagingSenderId: "1010379543141",
  appId: "1:1010379543141:web:55091aae5e39954227ec8c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };