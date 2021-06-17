import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsmXay7Ls0rIoA6j7WhdWtMJrPnPY9C9w",
    authDomain: "turnero-d1e04.firebaseapp.com",
    projectId: "turnero-d1e04",
    storageBucket: "turnero-d1e04.appspot.com",
    messagingSenderId: "1021966319948",
    appId: "1:1021966319948:web:de0d148775b59c6e298fe9",
    measurementId: "G-PR728CRS3V"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;