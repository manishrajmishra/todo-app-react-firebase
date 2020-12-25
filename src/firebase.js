// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCq8s1NyRd2M9Z83uX8BsLFIP-elQQe3Hc",
//   authDomain: "todo-app-1c268.firebaseapp.com",
//   databaseURL: "https://todo-app-1c268.firebaseio.com",
//   projectId: "todo-app-1c268",
//   storageBucket: "todo-app-1c268.appspot.com",
//   messagingSenderId: "442023828592",
//   appId: "1:442023828592:web:2613cb826fc364a3de28b5",
//   measurementId: "G-2BQ8TP02YX"
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCq8s1NyRd2M9Z83uX8BsLFIP-elQQe3Hc",
  authDomain: "todo-app-1c268.firebaseapp.com",
  databaseURL: "https://todo-app-1c268.firebaseio.com",
  projectId: "todo-app-1c268",
  storageBucket: "todo-app-1c268.appspot.com",
  messagingSenderId: "442023828592",
  appId: "1:442023828592:web:2613cb826fc364a3de28b5",
  measurementId: "G-2BQ8TP02YX"
});

const db = firebaseApp.firestore();

export { db };
