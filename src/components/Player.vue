<template>
    <main>
        <div class="title">
            <h1>Allegro</h1>
            <p id="copr">© 2020, Borna Jaklenec. All rights reserved</p>
        </div>
        <div class="Player">
            <div class="AlbumCover">
                <img :src="current.cover" alt="Cover" width="80%">
            </div>
            <div class="info">
                <p id="song">{{ current.title }}</p>
                <p id="artist">{{ current.artist }}</p>
            </div>
            <KProgress
                :show-text="false"
                v-bind:percent="current.percent"
                :color="['#f9803a8a']"
            />
            <div class="timer">
                <p class="start">{{ currentTime }}</p>
                <p class="end">
                  {{ current.totalTime }}
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
import { formatTime } from "@/assets/js/time";
import {threatSongs, shuffle} from "@/assets/js/functions";
import KProgress from 'k-progress'

export default {
  components: {
    KProgress 
  },
  name: "Player",
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      currentTime: "00:00",
      songs: shuffle(songs),
      player: new Audio()
    };
  },
  methods: {
    listenersWhenPlay() {
      this.player.addEventListener("timeupdate", () => {
        var playerTime = this.player.currentTime;
        this.currentTime = formatTime(playerTime);
        this.current.percent = (playerTime * 100) / this.current.seconds;
        this.current.isPlaying = true;
      });
      this.player.addEventListener(
        "ended",
        function() {
          this.next();
        }.bind(this)
      );
    },
    setCurrentSong() {
      this.current = this.songs[this.index];
      this.play(this.current);
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