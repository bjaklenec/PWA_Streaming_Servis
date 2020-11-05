<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500&display=swap" rel="stylesheet">
    
      <Allegro />
      <Slide noOverlay width="200">
        <div class="queue">
          <li>
            <ul>
              <p class="song">Studeni</p>
              <p class="artist">Flaneur</p>
            </ul>
            <ul>
              <p class="song">Stvari</p>
              <p class="artist">Flaneur</p>
            </ul>
            <ul>
              <p class="song">Miksolidjski</p>
              <p class="artist">Flaneur</p>
            </ul>
          </li>
        </div>
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
.song{
  color: rgb(233, 233, 233);
  margin: 0;
  font-weight: 400;
  font-size: 1.4rem;
  text-align: left;
}
.artist{
  color: rgb(233, 233, 233, 0,5);
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 200;
  text-align: left;
}
li{
  list-style: none;
}
ul{
  padding: 0;
  cursor: pointer;
}
ul::after{
  display:block;
  content: '';  
  border-bottom: solid 1px rgb(233, 233, 233);  
  transform: scaleX(1);  
  transition: transform 400ms ease-in-out;
}
ul:hover{
  opacity: 0.7;
}
ul:hover::after{
  transform: scaleX(0);
}
</style>
