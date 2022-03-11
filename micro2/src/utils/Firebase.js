
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKAPpIMyaqBIpRf14PQFKIox-CZnPuC9E",
  authDomain: "microproyctofinal.firebaseapp.com",
  projectId: "microproyctofinal",
  storageBucket: "microproyctofinal.appspot.com",
  messagingSenderId: "279410392741",
  appId: "1:279410392741:web:afccb9864571fd750b974c",
  measurementId: "G-JQ5CN01RRL"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
