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
  apiKey: "AIzaSyDLEmAGbFJE8eTmh2LFLO9vupMqaD9EcsY",
  authDomain: "todo-appp-react.firebaseapp.com",
  databaseURL: "https://todo-appp-react.firebaseio.com",
  projectId: "todo-appp-react",
  storageBucket: "todo-appp-react.appspot.com",
  messagingSenderId: "1054797573335",
  appId: "1:1054797573335:web:a244aacfb5f9a886b0d492",
  measurementId: "G-BXTE5JK6RC"
});

const db = firebaseApp.firestore();

export default db;
