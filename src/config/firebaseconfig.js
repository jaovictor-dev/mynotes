import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtP3vjGntRQYPcUcTb1C17Ru2O2zlEblo",
    authDomain: "biblioteca-b4eac.firebaseapp.com",
    projectId: "biblioteca-b4eac",
    storageBucket: "biblioteca-b4eac.appspot.com",
    messagingSenderId: "242381879980",
    appId: "1:242381879980:web:46cccb0e93609b2b4afd09"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase