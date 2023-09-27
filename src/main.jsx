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
  apiKey: "AIzaSyD8fSFp-kiAoVgtMCPNL_IgnTZbw30j4As",
  authDomain: "react-tp-final.firebaseapp.com",
  projectId: "react-tp-final",
  storageBucket: "react-tp-final.appspot.com",
  messagingSenderId: "218403155134",
  appId: "1:218403155134:web:98a95164f6faf7a5da82ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);