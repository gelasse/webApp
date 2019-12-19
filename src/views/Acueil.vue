
<template>
<div id="app">
  <h1>Des images illustratives</h1>
  <div v-for='sport in sports' :key="sport.idSport">
    <img :src='sport.strSportThumb' :alt='sport.strFormat' :title='sport.strSport' />
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
