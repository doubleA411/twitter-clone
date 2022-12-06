// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwwRyv0T1jrgun_IX26oZZJGJpmZmRNyo",
    authDomain: "twitter-clone-4fa5c.firebaseapp.com",
    projectId: "twitter-clone-4fa5c",
    storageBucket: "twitter-clone-4fa5c.appspot.com",
    messagingSenderId: "287334124804",
    appId: "1:287334124804:web:78d07a71d0699197ec9451"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export { db }