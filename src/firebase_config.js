import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAd4pQGFJPbqsI4f2kyd_ao9iLHvvyh8LY",
    authDomain: "assignment-6f07c.firebaseapp.com",
    projectId: "assignment-6f07c",
    storageBucket: "assignment-6f07c.appspot.com",
    messagingSenderId: "445989756347",
    appId: "1:445989756347:web:634096931a909e9761f89e"
  };

firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };