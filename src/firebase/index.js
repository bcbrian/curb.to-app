// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-V2U9u2RIoQDMb4-WGt5guX4oKk-OWPQ",
  authDomain: "curbto.firebaseapp.com",
  databaseURL: "https://curbto.firebaseio.com",
  projectId: "curbto",
  storageBucket: "curbto.appspot.com",
  messagingSenderId: "272089498568",
  appId: "1:272089498568:web:c58f07de1155b2ddc5f6fd",
  measurementId: "G-VKM3BY9L0R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
