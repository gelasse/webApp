<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Liste</router-link> |
      <router-link to="/about">Details</router-link>
      <router-link to="/acueil">Acueil</router-link>
      <router-link to="/chat/:nickname/:roomid/:roomname">Chat</router-link>
      <router-link to="/room/:nickname">Room</router-link>
      <router-link to="/add-room">Add-Room</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
