import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {
  getDatabase,
  push,
  ref,
  set,
  get,
  update,
  remove,
  onValue,
  query,
  equalTo,
  orderByChild,
  child,
  off
} from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyD9WtYMBNTL3Lx8x3HAPF1aaEMomrCCfI8',
  authDomain: 'luana-garcia-website-v2.firebaseapp.com',
  projectId: 'luana-garcia-website-v2',
  storageBucket: 'luana-garcia-website-v2.appspot.com',
  messagingSenderId: '464663087410',
  appId: '1:464663087410:web:c55f4c680e6a4453b7ef2b',
  measurementId: 'G-G375NFCEC5'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const database = getDatabase(app)

export {
  app,
  auth,
  database,
  push,
  ref,
  set,
  get,
  update,
  remove,
  query,
  equalTo,
  child,
  orderByChild,
  onValue,
  off,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
}
