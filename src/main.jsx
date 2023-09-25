import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5z2CCZdiVMB4YHm6tp3EDTQOZjgmVs5M",
  authDomain: "test-firebase-clase13.firebaseapp.com",
  projectId: "test-firebase-clase13",
  storageBucket: "test-firebase-clase13.appspot.com",
  messagingSenderId: "221104422339",
  appId: "1:221104422339:web:1b862089790c9ecff89176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);