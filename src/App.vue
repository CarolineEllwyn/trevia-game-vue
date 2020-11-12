<template>
  <div id="app">
    <StartPage/>
    <Question/>
    <!-- <ResultsPage/> -->

  </div>
</template>

<script>
 import StartPage from './components/StartPage.vue'
import Question from './components/Question'
// import ResultsPage from './components/ResultsPage'

export default {
  name: 'App',
  components: {
     StartPage,
   Question,
    // ResultsPage
  }
}
</script>

<style></style>
