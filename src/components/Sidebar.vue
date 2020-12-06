<template>
  <div class="sidebar">
      <Slide noOverlay width="200">
        <div class="queue">
          <ul>
            <li>
              <p class="song">{{ songs[0].title }}</p>
              <p class="artist">{{ songs[0].artist }}</p>
            </li>
            <li>
              <p class="song">Stvari</p>
              <p class="artist">Flaneur</p>
            </li>
            <li>
              <p class="song">Miksolidijski</p>
              <p class="artist">Flaneur</p>
            </li>
          </ul>
        </div>
      </Slide>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Sidebar',
  data(){
    return {
      songs: [
        {
          title: 'Bornina',
          artist: 'Flaneur',
          src: require('@/assets/songs/Flaneur - Bornina.mp3')
        }
      ]
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