import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import data from './data/items.json'
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0T200NCN7IP4sdpxNZmZc26vo461mmWo",
  authDomain: "info-340-project-5bf73.firebaseapp.com",
  projectId: "info-340-project-5bf73",
  storageBucket: "info-340-project-5bf73.appspot.com",
  messagingSenderId: "737133599965",
  appId: "1:737133599965:web:009960d1043ca0a0388f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//render the App component here!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App itemList={data}/>
  // </React.StrictMode>  
  <BrowserRouter>
    <App itemList={data}/>
  </BrowserRouter>
);