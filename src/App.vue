<template>
  <div id="app">
    <Player />
    <!-- <Sidebar /> -->
  </div>
</template>

<script>
import Player from '@/components/Player.vue'
//import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Player
  }
}
</script>

<style>
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
@media screen and (max-width: 1000px){
  #app{
    width: 70%;
  }
}
</style>
