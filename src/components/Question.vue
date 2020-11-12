<template>
  <ul>
      <li v-for="question in fetchedQuestion" :key=question.question></li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Question',
    data: () => ({
        fetchedQuestion: null
    }),
    mounted() {                 //application is mounted
        axios                   //axios fetch data from 
            .get('https://opentdb.com/api.php?amount=10&category=26&difficulty=easy') //endpoint for api
            .then(response => this.fetchedQuestion = response.data)  //initilise the data to data
    }
}





</script>

<style>
  li{
    margin-bottom: 1rem;
  }
</style> 