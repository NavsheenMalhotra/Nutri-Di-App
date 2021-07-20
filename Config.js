import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyAcJYGHqHx_cNQ8a2kuKlzPnheQddGN00g",
  authDomain: "nutri-di.firebaseapp.com",
  projectId: "nutri-di",
  storageBucket: "nutri-di.appspot.com",
  messagingSenderId: "883252735507",
  appId: "1:883252735507:web:f3f04faa3125d8531799e6"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
