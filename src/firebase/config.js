import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBGj94a1yV1qdll-WApE3tQMHkUoURxZss",
  authDomain: "react-firebase-photo-app.firebaseapp.com",
  projectId: "react-firebase-photo-app",
  storageBucket: "react-firebase-photo-app.appspot.com",
  messagingSenderId: "201057498810",
  appId: "1:201057498810:web:3006b382d7b9625adfb483",
};
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };