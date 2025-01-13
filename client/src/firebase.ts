// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCirKtAu2zJSpHEBBwaBhWC7tzyR8WqTpY",
    authDomain: "hackathon-2025-7b864.firebaseapp.com",
    databaseURL: "https://hackathon-2025-7b864-default-rtdb.firebaseio.com",
    projectId: "hackathon-2025-7b864",
    storageBucket: "hackathon-2025-7b864.firebasestorage.app",
    messagingSenderId: "675652574269",
    appId: "1:675652574269:web:98afda5c99ef99a1d61e54",
    measurementId: "G-R833C012VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };