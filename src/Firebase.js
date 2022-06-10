// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQs5rz1gi6ZMipemstQQBo1UfDtZ6s1E",
  authDomain: "ichinsan-90ac4.firebaseapp.com",
  projectId: "ichinsan-90ac4",
  storageBucket: "ichinsan-90ac4.appspot.com",
  messagingSenderId: "349400246130",
  appId: "1:349400246130:web:cbd4e289e5c182f2085feb",
  measurementId: "G-PV453Q9SQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);



