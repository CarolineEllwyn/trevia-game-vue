<template>
  <div class="start-page">
      <h1 id="start-page-title">Welcome to Trivia Game</h1>
    <router-link id="play-button" to="/Question">Play now!</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'StartPage'
}
</script>
<style lang="css">
body {
    font-family: 'Courier New', Courier, monospace;
    background: rgb(37, 36, 35);
    margin: 0;

}
#start-page-title {
    text-align: center;
    margin: 50px;
    text-transform: uppercase;
        color: rgba(255, 255, 255, 0.692);
}
#play-button{
    background-color:  rgba(255, 255, 255, 0.692);
    text-align: center;
    color: white;
    font-size: 30px;
    border-radius: 10px;
    padding: 5px;
}
#play-button:hover {
cursor: pointer;
background-color:  rgba(255, 255, 255, 0.308);;
padding: 10px;
}
</style>
