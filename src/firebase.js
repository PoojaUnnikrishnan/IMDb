// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//firebase configuration file which give access to the database.
const firebaseConfig = {
  apiKey: "AIzaSyB-QVmmw3ZskDzLX_ioiaOGTtzX3KkpM18",
  authDomain: "imdb-5bff1.firebaseapp.com",
  projectId: "imdb-5bff1",
  storageBucket: "imdb-5bff1.appspot.com",
  messagingSenderId: "27421362430",
  appId: "1:27421362430:web:cb4d0da6e4908bdbee3daf",
  measurementId: "G-2RBXM2MNLG",
};
//initialize the firebase app.
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase database
const db = firebaseApp.firestore();
//firebase authentication
export const auth = firebase.auth();
//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
//firebase storage access
const storage = firebase.storage;

export { provider, storage, db };
export default db;
