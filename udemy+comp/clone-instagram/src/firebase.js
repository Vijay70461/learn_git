import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9sRjCeqQBGOc1qP9KpeGsYR4HJD25eb0",
  authDomain: "clone-instagram-5d2bd.firebaseapp.com",
  projectId: "clone-instagram-5d2bd",
  storageBucket: "clone-instagram-5d2bd.appspot.com",
  messagingSenderId: "981239087708",
  appId: "1:981239087708:web:e8bec2a3a0b632a6fc5c99",
  measurementId: "G-EZ4WEFCEKC",
};

const app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
