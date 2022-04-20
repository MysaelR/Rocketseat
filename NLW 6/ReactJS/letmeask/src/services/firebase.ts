import firebase, { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCEpH4iKGmZkB2vPc_ArydiyIwg3DdGFGQ",
    authDomain: "letmeask-4e187.firebaseapp.com",
    databaseURL: "https://letmeask-4e187-default-rtdb.firebaseio.com",
    projectId: "letmeask-4e187",
    storageBucket: "letmeask-4e187.appspot.com",
    messagingSenderId: "650363454020",
    appId: "1:650363454020:web:a5000a979726e89bbc3211"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //firebase.initializeApp(firebaseConfig);


  export const auth = getAuth();
  export const database = getDatabase();
/*   export const auth = firebase.auth();
  export const database = firebase.database(); */



  /* createUserWithEmailAndPassword(auth, "email", password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */
