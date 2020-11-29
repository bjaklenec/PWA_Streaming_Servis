<template>
  <div class="sidebar">
    <Player />
      <Slide noOverlay width="200">
        <div class="queue">
          <ul>
            <li>
              <p class="song">Studeni</p>
              <p class="artist">Flaneur</p>
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
      <router-view/>
  </div>
</template>

<script>
import Player from '@/components/Player.vue'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Sidebar',
  components: {
    Player, 
    Slide
  }
}
</script>