import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhWy8spjecuhOt2LAYXmpj0lishYOP0Vk",
    authDomain: "chat-app-1337a.firebaseapp.com",
    databaseURL: "https://chat-app-1337a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-app-1337a",
    storageBucket: "chat-app-1337a.appspot.com",
    messagingSenderId: "422979261737",
    appId: "1:422979261737:web:c352cd039198e74cb31338",
    measurementId: "G-B1MW1P4YHD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
