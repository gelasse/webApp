<template>
<div>
  <h3>Veuillez vous connecter avec votre compte google s.v.p.</h3>
  <button @click="connexion">Ce connecter avec google</button>
</div> 
</template>

<script>
import firebase from 'firebase'
export default {
  methods: {
    connexion (){
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


          firebase.auth().signInWithPopup(provider).then(result=> {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  //to push to the main component
  this.$router.push('/chat/:nickname/:roomid/:roomname')
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

    }
  }
}
</script>