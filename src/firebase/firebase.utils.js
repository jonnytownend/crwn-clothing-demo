import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyCm4Yu7RKLhOC8__sc6E8l69QhEDmjmFU8",
    authDomain: "crwn-clothing-d2cda.firebaseapp.com",
    databaseURL: "https://crwn-clothing-d2cda.firebaseio.com",
    projectId: "crwn-clothing-d2cda",
    storageBucket: "crwn-clothing-d2cda.appspot.com",
    messagingSenderId: "209986059281",
    appId: "1:209986059281:web:cc78e6ff50a2e1b81505b0",
    measurementId: "G-V51H5CWN6M"
  })

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase