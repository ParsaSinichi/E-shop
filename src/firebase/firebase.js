import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config={
  apiKey: "AIzaSyCAZAyyEkAXHWf7iYu-2lsv6lji-gDYQmQ",
  authDomain: "e-shop-db-aeba6.firebaseapp.com",
  projectId: "e-shop-db-aeba6",
  storageBucket: "e-shop-db-aeba6.appspot.com",
  messagingSenderId: "143571960921",
  appId: "1:143571960921:web:d2909cf98e44eb00b69d48"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;