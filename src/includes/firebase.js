import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYLUcM44Wn-BI0SbmoEESmwZtPxxoOrBU',
  authDomain: 'music-7a710.firebaseapp.com',
  projectId: 'music-7a710',
  storageBucket: 'music-7a710.appspot.com',
  messagingSenderId: '451971420750',
  appId: '1:451971420750:web:2aee26fff9811f34b3a91f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
