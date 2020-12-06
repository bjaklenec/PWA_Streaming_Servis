<template>
  <div class="sidebar">
      <Slide noOverlay width="200">
        <div class="queue">
          <ul>
            <!-- <li @click="play(song)" v-for="song in songs" :key="song.src">
              <p class="song">{{ song.title }}</p>
              <p class="artist">{{ song.artist }}</p>
            </li> 
            
            Moram jos prouciti kako koristiti metode iz Player.vue komponente
            pa cu dodati funkcionalnost da se sve pjesme ucitavaju i biraju od tud
            
            -->
          </ul>
        </div>
      </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
//import songs from "@/assets/js/songs"

export default {
  name: 'Sidebar',
  data(){
    return {
    }
  },
  components: {
    Slide
  }
}
</script>

<style>
@import "../assets/styles/sidebar.css";
</style>