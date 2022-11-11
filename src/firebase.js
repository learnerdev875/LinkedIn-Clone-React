import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import {initializeApp} from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyAnW2YWynloHJf9Nh0G25JhMZlRZ-xroSQ",
    authDomain: "linkedin-clone-6e047.firebaseapp.com",
    projectId: "linkedin-clone-6e047",
    storageBucket: "linkedin-clone-6e047.appspot.com",
    messagingSenderId: "929441400047",
    appId: "1:929441400047:web:b56305ef6f90280a28871a"
  };

  // const firebaseApp = initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};