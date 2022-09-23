import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./UserForm";

const firebaseConfig = {

  apiKey: "AIzaSyCMntzEf-z--bDabQ74YGeoQQbtjeF8nc4",

  authDomain: "reactfirebasecrud-fb6c5.firebaseapp.com",

  databaseURL: "https://reactfirebasecrud-fb6c5-default-rtdb.firebaseio.com",

  projectId: "reactfirebasecrud-fb6c5",

  storageBucket: "reactfirebasecrud-fb6c5.appspot.com",

  messagingSenderId: "518167356479",

  appId: "1:518167356479:web:b602a65331df4bcd91048a",

  measurementId: "G-VE77WCMW1L"

};


firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();