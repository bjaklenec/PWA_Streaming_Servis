<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500&display=swap" rel="stylesheet">
    
      <Allegro />
      <Slide noOverlay>
        <a id="home" href="#">
          <span>Home</span>
        </a>
      </Slide>
    
  </div>
</template>

<script>
import Allegro from './components/Allegro.vue'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Allegro, 
    Slide
  }
}
</script>

<style>
body{
  background-color: #f9803a8a;
}
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
.bm-burger-bars{
  background-color: rgb(54, 54, 54);
}
.bm-cross{
  background: rgb(233, 233, 233);
}
.bm-menu{
  background-color: rgb(54, 54, 54);
}
.bm-item-list > * > span{
  color: rgb(233, 233, 233);
  font-weight: 300;
}
</style>
