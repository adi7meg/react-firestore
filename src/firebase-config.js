import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCryljDQ0GxW6pmPObxISl77j_oSzCbT9s",
    authDomain: "react-firebase-4efe7.firebaseapp.com",
    projectId: "react-firebase-4efe7",
    storageBucket: "react-firebase-4efe7.appspot.com",
    messagingSenderId: "364604665192",
    appId: "1:364604665192:web:55db918f91de2a8daf7add",
    measurementId: "G-PTP8CNMCTX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);