
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyC-bjfgMQDL5znzQnBKRkQRnQSZdGF00wU",
  authDomain: "miproyecto-413e0.firebaseapp.com",
  databaseURL: "https://miproyecto-413e0-default-rtdb.firebaseio.com",
  projectId: "miproyecto-413e0",
  storageBucket: "miproyecto-413e0.appspot.com",
  messagingSenderId: "594210646760",
  appId: "1:594210646760:web:a08edabb31c690920b775d",
  measurementId: "G-ZG0F2W2B9Q"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app); 