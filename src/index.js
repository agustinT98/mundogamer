import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaGcHiTJ8cUTiUV1NDd5z8BtrBEwTgmZ0",
  authDomain: "mundogamer-e0527.firebaseapp.com",
  projectId: "mundogamer-e0527",
  storageBucket: "mundogamer-e0527.appspot.com",
  messagingSenderId: "287342666483",
  appId: "1:287342666483:web:f6cfd31c851dab511e8d86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

