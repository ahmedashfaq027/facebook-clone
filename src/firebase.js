import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3aCcAfXRBN5SFkXWakLpkMV3rb0rIeAc",
  authDomain: "facebook-clone-ash.firebaseapp.com",
  databaseURL: "https://facebook-clone-ash.firebaseio.com",
  projectId: "facebook-clone-ash",
  storageBucket: "facebook-clone-ash.appspot.com",
  messagingSenderId: "649790158708",
  appId: "1:649790158708:web:e1446e1cb2d02723101e21",
  measurementId: "G-S26R2JZN3N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
