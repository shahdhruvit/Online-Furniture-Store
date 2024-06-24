import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC-DX1DtHwIIY6AU5h6ZhpGjrKRPpvXzZM",
  authDomain: "maltimart-756cf.firebaseapp.com",
  projectId: "maltimart-756cf",
  storageBucket: "maltimart-756cf.appspot.com",
  messagingSenderId: "368121276703",
  appId: "1:368121276703:web:4d70e73bd60812e647282a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
