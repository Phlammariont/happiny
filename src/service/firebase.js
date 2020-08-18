import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5DCG7mVl_l0qMukK3vZV2bhFwfJySNxQ",
  authDomain: "happiy-dev.firebaseapp.com",
  databaseURL: "https://happiy-dev.firebaseio.com",
  projectId: "happiy-dev",
  storageBucket: "happiy-dev.appspot.com",
  messagingSenderId: "1040194694107",
  appId: "1:1040194694107:web:c845fa152a5998c57395fe",
  measurementId: "G-J0JPTPMD0P"
};
// Initialize Firebase
const instance = firebase.initializeApp(firebaseConfig);

export const auth = instance.auth()

const db = firebase.firestore()

export const addItem = (collection, item) => db.collection(collection).add(item)
