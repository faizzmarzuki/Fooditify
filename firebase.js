// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAS3FReUg-HQjDxwipLqQ6kEJhZS3-erko",
    authDomain: "foodietify.firebaseapp.com",
    projectId: "foodietify",
    storageBucket: "foodietify.appspot.com",
    messagingSenderId: "6134882923",
    appId: "1:6134882923:web:57b55ecde565acee51072e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);