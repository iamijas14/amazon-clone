// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2xQihui9MEwBuMLdve5weRoXz3Owg-g4",
    authDomain: "clone-41e93.firebaseapp.com",
    projectId: "clone-41e93",
    storageBucket: "clone-41e93.appspot.com",
    messagingSenderId: "569585389852",
    appId: "1:569585389852:web:9e57cb87adc685835a2ad9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };