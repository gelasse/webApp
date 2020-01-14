//imports of Firebase SDK module
import * as firebase from 'firebase';

// Required for side-effects
require("firebase/firestore");  
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBZcolOUZ0rPmIWmu7662vmTHXpTbq4Yc",
    authDomain: "webappchat-71129.firebaseapp.com",
    databaseURL: "https://webappchat-71129.firebaseio.com",
    projectId: "webappchat-71129",
    storageBucket: "webappchat-71129.appspot.com",
    messagingSenderId: "674949010858",
    appId: "1:674949010858:web:b06e0f76213f0bd1f507d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Cloud Firestore through Firebase

var db = firebase.firestore();
window.db = db;

  export default firebase;