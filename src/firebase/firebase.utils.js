import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG = {
  apiKey: 'AIzaSyAethiF73g5MKPedAKcN0NKfEN-NunS0RY',
  authDomain: 'crwn-db-eb724.firebaseapp.com',
  databaseURL: 'https://crwn-db-eb724.firebaseio.com',
  projectId: 'crwn-db-eb724',
  storageBucket: 'crwn-db-eb724.appspot.com',
  messagingSenderId: '503592875710',
  appId: '1:503592875710:web:1b857f4f9a3cbce430d0ef',
};

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
