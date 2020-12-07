<template>
  <div class="sidebar">
      <Slide noOverlay width="200">
        <div class="queue">
          <ul>
            <li @click="play(song)" v-for="song in songs" :key="song.src">
              <p class="song">{{ song.title }}</p>
              <p class="artist">{{ song.artist }}</p>
            </li> 
          </ul>
        </div>
      </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';

export default {
  name: 'Sidebar',
  data() {
    return {
      isPlaying: false,
      current: {},
      songs: shuffle(songs)
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