<template>
  <div class="sidebar">
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
import { Slide } from 'vue-burger-menu'

export default {
  name: 'Sidebar',
  components: {
    Slide
  }
}
</script>