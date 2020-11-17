import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBTEBCBpGefX_Yl7ujTiBpRtqKQKoojphc",
    authDomain: "creative-spaces-6aeb5.firebaseapp.com",
    databaseURL: "https://creative-spaces-6aeb5.firebaseio.com",
    projectId: "creative-spaces-6aeb5",
    storageBucket: "creative-spaces-6aeb5.appspot.com",
    messagingSenderId: "800331430556",
    appId: "1:800331430556:web:939582dffcc1d7ca640b59"
}

const firebaseInit = firebase.initializeApp(firebaseConfig)

const projectStorage = firebaseInit.storage()
const projectFirestore = firebaseInit.firestore()


export { firebaseInit, projectStorage, projectFirestore}