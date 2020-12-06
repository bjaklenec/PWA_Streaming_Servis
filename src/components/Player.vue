<template>
    <main>
        <div class="title">
            <h1>Allegro</h1>
            <p id="copr">© 2020, Borna Jaklenec. All rights reserved</p>
        </div>
        <div class="Player">
            <div class="AlbumCover">
                <img v-bind:class="coverObject" :src="current.cover" alt="Cover" width="80%">
            </div>
            <div class="info">
                <p id="song">{{ current.title }}</p>
                <p id="artist">{{ current.artist }}</p>
            </div>
            <KProgress
                :show-text="false"
                class="progress-bar-wrapper"
                v-bind:percent="current.percent"
                :color="['#f9803a8a']"
            />
            <div class="timer">
                <p class="start">{{ currentlyTimer }}</p>
                <p class="end">
                  {{ current.totalTimer }}
                </p>
            </div>
            <div class="PlayerButtons">
                <a @click="prev" v-if="songs.length > 1" class="button" title="Previous Song"><i class="zmdi zmdi-skip-previous"></i></a>
                <a @click="play" v-if="!isPlaying" class="buttonPlayPause" title="Play song"><i class="zmdi zmdi-play-circle"></i></a>
                <a @click="pause" v-else class="buttonPlayPause" title="Pause song"><i class="zmdi zmdi-pause-circle"></i></a>
                <a @click="next" v-if="songs.length > 1" class="button" title="Next song"><i class="zmdi zmdi-skip-next"></i></a>
            </div>     
        </div>

    </main>   
</template>

<script>
import songs from "@/assets/js/songs";
import { formatTimer } from "@/assets/js/timer";
import {threatSongs, shuffleArray} from "@/assets/js/functions";
import KProgress from 'k-progress'

export default {
  components: { KProgress },
  name: "Player",
  data() {
    return {
      current: {},
      coverObject: { cover: true, animated: false },
      index: 0,
      isPlaying: false,
      currentlyTimer: "00:00",
      songs: shuffleArray(songs),
      player: new Audio()
    };
  },
  methods: {
    listenersWhenPlay() {
      this.player.addEventListener("timeupdate", () => {
        var playerTimer = this.player.currentTime;
        this.currentlyTimer = formatTimer(playerTimer);
        this.current.percent = (playerTimer * 100) / this.current.seconds;
        this.current.isPlaying = true;
      });
      this.player.addEventListener(
        "ended",
        function() {
          this.next();
        }.bind(this)
      );
    },
    setCover() {
      this.coverObject.animated = true;
      setTimeout(() => {
        this.coverObject.animated = false;
      }, 1000);
    },
    setCurrentSong() {
      this.current = this.songs[this.index];
      this.play(this.current);
      this.setCover();
    },
    play(song) {
      if (typeof song.src !== "undefined") {
        this.current.isPlaying = false;
        this.index = this.songs.indexOf(this.current);
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;
      this.setCover();
      this.listenersWhenPlay();
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.setCurrentSong();
    },
    prev() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.setCurrentSong();
    }
  },
  mounted() {
    this.songs = threatSongs(this.songs);
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
};
</script>

<style>
@import "../assets/styles/player.css";
@import "../assets/styles/sidebar.css";

</style>
