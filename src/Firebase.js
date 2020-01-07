import * as firebase from 'firebase';

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

  export default firebase;