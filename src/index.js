import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './global-styles'

import { AuthUserContext } from './context/authUser'
import { useAuthListener } from './hooks'

import { FirebaseContext } from './context/firebase'
import { firebaseInit, firebaseFirestore, firebaseStorage } from './firebase/config'



render(
    <>
        <FirebaseContext.Provider value={
            { 
                firebase: firebaseInit, 
                firebaseFirestore: firebaseFirestore,
                firebaseStorage: firebaseStorage
            }}>
            <AuthUserContext.Provider value={{ authUser : useAuthListener }}>
                <GlobalStyles />
                <App />
            </AuthUserContext.Provider>
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);


