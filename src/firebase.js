import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMYCQJMVMBlQwPKIIgbipExBFee8Bi570",
    authDomain: "clone-pj.firebaseapp.com",
    databaseURL: "https://clone-pj.firebaseio.com",
    projectId: "clone-pj",
    storageBucket: "clone-pj.appspot.com",
    messagingSenderId: "988480677902",
    appId: "1:988480677902:web:3ae973fd442c9b5fdeb45f"
});

const auth = firebase.auth();

export { auth };