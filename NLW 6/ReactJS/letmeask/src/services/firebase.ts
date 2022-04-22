import firebase, { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
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
