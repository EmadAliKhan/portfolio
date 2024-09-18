// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWvpDF2AD124snjmwqFi3HSgn2Z3cIDSg",
  authDomain: "myportfolio-682b1.firebaseapp.com",
  projectId: "myportfolio-682b1",
  storageBucket: "myportfolio-682b1.appspot.com",
  messagingSenderId: "373733178101",
  appId: "1:373733178101:web:878ca41c9ddf21aef1e3bc",
  measurementId: "G-0MRG7Q727B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{
  db,
  addDoc,collection
}