import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './global-styles'


import { FirebaseContext } from './context/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyBTEBCBpGefX_Yl7ujTiBpRtqKQKoojphc",
    authDomain: "creative-spaces-6aeb5.firebaseapp.com",
    databaseURL: "https://creative-spaces-6aeb5.firebaseio.com",
    projectId: "creative-spaces-6aeb5",
    storageBucket: "creative-spaces-6aeb5.appspot.com",
    messagingSenderId: "800331430556",
    appId: "1:800331430556:web:939582dffcc1d7ca640b59"
}

const firebaseConfig = firebase.initializeApp(config)

render(
    <>
        <FirebaseContext.Provider value={{ firebase: firebaseConfig }}>

            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);


