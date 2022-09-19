import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADYM9jcxq2zsgZYcNEi4yTX-RR_YO1czc",
    authDomain: "dojo-51f44.firebaseapp.com",
    projectId: "dojo-51f44",
    storageBucket: "dojo-51f44.appspot.com",
    messagingSenderId: "684892820084",
    appId: "1:684892820084:web:fc47817e843aed3f47f721",
    measurementId: "G-LZRYLK5HP1"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }


  