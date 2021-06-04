
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAyUtnCxvqVuX0veafuCWRZH9gfyIFo--0",
  authDomain: "what-university-7bc14.firebaseapp.com",
  projectId: "what-university-7bc14",
  storageBucket: "what-university-7bc14.appspot.com",
  messagingSenderId: "31357315872",
  appId: "1:31357315872:web:724bfb29840955dee54545",
  measurementId: "G-XDX81FWM44"
}
export const firebaseApp = initializeApp(firebaseConfig);
export const dataBase =  getFirestore();

          