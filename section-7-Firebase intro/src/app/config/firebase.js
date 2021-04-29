import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCNkK_tZzEZgp67J5y4BK8t0Z6tx-vmNT4',
  authDomain: 'revents-course-e7df5.firebaseapp.com',
  projectId: 'revents-course-e7df5',
  storageBucket: 'revents-course-e7df5.appspot.com',
  messagingSenderId: '924728282922',
  appId: '1:924728282922:web:43dfb654b2db4bb9989853',
  measurementId: 'G-ESN2TFS46Q',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
