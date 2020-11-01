<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500&display=swap" rel="stylesheet">
    <Allegro />
  </div>
</template>

<script>
import Allegro from './components/Allegro.vue'

export default {
  name: 'App',
  components: {
    Allegro
  }
}
</script>

<style>
body{
  background-color: #f9803a8a;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50%;
  margin: 0 auto;
}
</style>
