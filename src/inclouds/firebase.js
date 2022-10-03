import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_MAGW23aIHiB2-BlQTCw17a8dfmEhwUw",
  authDomain: "spotify-c9c7d.firebaseapp.com",
  projectId: "spotify-c9c7d",
  storageBucket: "spotify-c9c7d.appspot.com",
  appId: "1:451265693558:web:2e4acb4b8e6fb462c21c57",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection("users");
export { auth, db, userCollection };
