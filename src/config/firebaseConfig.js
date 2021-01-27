import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyChtD241q49iIBP4t7lwred7iy5DYaDeO4',
  authDomain: 'techloset-solutions.firebaseapp.com',
  projectId: 'techloset-solutions',
  storageBucket: 'techloset-solutions.appspot.com',
  messagingSenderId: '686437630464',
  appId: '1:686437630464:web:ba5c62ee70b1bd40f68ee5',
  measurementId: 'G-VSVBMQDWY6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
