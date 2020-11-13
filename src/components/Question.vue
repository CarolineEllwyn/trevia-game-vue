<template>
<div class="question-container">
<h3 class="number-of-current-question">Question 1 of 10</h3>
<h2 class="question">How tall is the tree</h2>
<div class="option">
  <button class="btn-option"> 10 </button>
    <button class="btn-option"> 20 </button>
      <button class="btn-option"> 30 </button>
        <button class="btn-option"> 40 </button>
</div>
<p class="current-score">Current score: 40p</p>
</div>
  <!-- <ul>
      <li v-for="question in fetchedQuestion" :key=question.question></li>
  </ul> -->
</template>

<script>
import axios from 'axios'

export default {
    name: 'Question',
    data: () => ({
        fetchedQuestion: [],
        
    }),
    mounted() {                 //application is mounted
        axios                   //axios fetch data from 
            .get('https://opentdb.com/api.php?amount=10&category=26&difficulty=easy') //endpoint for api
            .then(response => this.fetchedQuestion = response.data)  //initilise the data to data
    },
    methods: {

    }
}




</script>

<style>
  .question-container{
    width: 60%;
    padding: 20px;
    position: absolute;
    left: 20%;
  }

  .option{
    display: grid;
    grid-template: auto auto / auto auto;
    row-gap: 15px;
    column-gap: 15px;
    justify-content: center;
  }

  .btn-option{
    text-align: center;
    cursor: pointer;
    background-color: rgb(155, 155, 155);
    border-radius: 5px;
    padding: 20px;
    width: 400px;
  }
  .btn-alt:hover {
    cursor: pointer;
    border: 5px rgb(180, 180, 180) solid;
}

.question{
          text-align: center;
  color: rgba(255, 255, 255, 0.849);
}

.number-of-current-question{
  color: rgba(255, 255, 255, 0.849);
}

.current-score{
    color: rgba(255, 255, 255, 0.849);

}
</style>