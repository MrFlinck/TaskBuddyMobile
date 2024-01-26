import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'; 
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { initializeAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyCCFjoEpdDkSS4-mVMceDbAvuT196g3dxo",
  authDomain: "taskbuddy-407121.firebaseapp.com",
  projectId: "taskbuddy-407121",
  storageBucket: "taskbuddy-407121.appspot.com",
  messagingSenderId: "121072375342",
  appId: "1:121072375342:web:bebd54ba9f737586bcf1bf",
  measurementId: "G-WVL1VYK1MS"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app); 
export const provider = new GoogleAuthProvider();

