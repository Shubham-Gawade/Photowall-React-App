import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBJ5ElFWcNrRvtftR_y94IzVtyG12MTirI",
    authDomain: "photowall-react-a797b.firebaseapp.com",
    databaseURL: "https://photowall-react-a797b-default-rtdb.firebaseio.com",
    projectId: "photowall-react-a797b",
    storageBucket: "photowall-react-a797b.appspot.com",
    messagingSenderId: "864017697277",
    appId: "1:864017697277:web:b850ac7cd69d70f9f5b194",
    measurementId: "G-22Q85DTX15"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {database}