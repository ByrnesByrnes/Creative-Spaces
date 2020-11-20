import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './global-styles'


import { FirebaseContext } from './context/firebase'
import { firebaseInit, firebaseFirestore } from './firebase/config'


render(
    <>
        <FirebaseContext.Provider value={
            { 
                firebase: firebaseInit, 
                firebaseFirestore: firebaseFirestore 
            }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);


