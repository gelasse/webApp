
<template>
<div id="app">
  <div v-if="!clickSport">
  <h1>La liste de tous les Sports</h1>
  <div v-for='(sport, index) in sports' :key="sport.idSport">
    <a v-on:click="doSomething(sport, index)">{{ sport.strSport }}</a>
  </div>
</div>
<div v-else>
  <div id="app">
  <button v-on:click="clickSport= 0">Fermer</button>
</div>
  <h1>  {{clickSport.strSport}}
</h1>
  <p>{{clickSport.strSportDescription}}</p>
  <div> <img :src='clickSport.strSportThumb' :alt='clickSport.strFormat' :title='clickSport.strSport' /></div>
</div>
</div>
</template>
<script>

import axios from 'axios'
export default {
  data () {
    return {
      info: null,
      loading: true,
      errored: false,
      sports : [],
      clickSport : null
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
      .then(response => {
        console.log(response)
        this.sports = response.data.sports
      })
      .catch(error => {  console.log(error)
        this.errored = true
      })
  },
  methods: {
    doSomething: function(sport, i){
    console.log(i)
    this.clickSport = sport
    //alert(sport.strSportDescription)
    }
  }
}
</script>
