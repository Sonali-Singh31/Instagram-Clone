import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATUB6fY43VmeNZ_rWg-bOFGlx-5_aBgQg",
    authDomain: "instagram-clone-b0cb4.firebaseapp.com",
    projectId: "instagram-clone-b0cb4",
    storageBucket: "instagram-clone-b0cb4.appspot.com",
    messagingSenderId: "349908647605",
    appId: "1:349908647605:web:153ed7afa855e0187808fc",
    measurementId: "G-4JRWVL7JFD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };