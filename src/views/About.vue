
<template>
<div id="app">
  <h1>Le detail des differents Sports</h1>
  <ul v-for='sport in sports' :key="sport.idSport">
   <li> {{ sport.strSportDescription}}</li>
  </ul>
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
      sports : [] 
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
  }
}
</script>

