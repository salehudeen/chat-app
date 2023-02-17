import React from 'react'
import { useState } from 'react'
import './App.css'
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/auth'

firebaseError.initalizeApp({
  apiKey: "AIzaSyCE7_R1a9ARnxp_hPBQJ2Xg9XC4JUUlKHU",
  authDomain: "hhyy-7f066.firebaseapp.com",
  databaseURL: "https://hhyy-7f066-default-rtdb.firebaseio.com",
  projectId: "hhyy-7f066",
  storageBucket: "hhyy-7f066.appspot.com",
  messagingSenderId: "3932462642",
  appId: "1:3932462642:web:b9e3483421311ebb6aa62b",
  measurementId: "G-3CSR1XX8F9"
})
const auth = firebase.auth()
const firestore = firebase.firestore();


function App() {

  return (
    <div className="App">
       <header className='App-header'>

       </header>
    </div>
  )
}

export default App
