import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBjBNEEgoJbYSJ3GzIaeU_hGW-d2F7hIrY",
  authDomain: "linkedin--clone-cc0b1.firebaseapp.com",
  projectId: "linkedin--clone-cc0b1",
  storageBucket: "linkedin--clone-cc0b1.appspot.com",
  messagingSenderId: "602133839785",
  appId: "1:602133839785:web:1ce76574f5988e25b04eb8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)