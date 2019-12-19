import * as firebase from 'firebase';

const config = {
    apiKey: " AIzaSyDBZcolOUZ0rPmIWmu7662vmTHXpTbq4Yc ",
    authDomain: "webappChat",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "webappchat-71129",
    storageBucket: "YOUR_STORAGE_BUCKET"
  };
  firebase.initializeApp(config);
  export default firebase;

  