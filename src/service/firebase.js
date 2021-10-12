import { initializeApp } from 'firebase/app'
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'

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

const instance = initializeApp(firebaseConfig);

const db = getFirestore(instance)

export const addItem = (collectionName, item) => addDoc(collection(db, collectionName), item)

export const updateItem = ({collectionName,  id, update }) => setDoc(doc(db, collectionName, id), update)

export const fetchCollection = (collectionName) => getDocs(collection(db, collectionName))

export const removeItem = (collectionName, itemId) => deleteDoc(doc(db, collectionName, itemId))
