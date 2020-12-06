<template>
    <main>
        <div class="title">
            <h1>Allegro</h1>
            <p id="copr">© 2020, Borna Jaklenec. All rights reserved</p>
        </div>
        <div class="Player">
            <div class="AlbumCover">
                <img src="../assets/covers/Flaneur - Kaktus.jpeg" alt="Cover" width="80%">
            </div>
            <div class="info">
                <p id="song">Test</p>
                <p id="artist">Test</p>
            </div>
            <div class="PlayerButtons">
                <a class="button" title="Previous Song"><i class="zmdi zmdi-skip-previous"></i></a>
                <a class="buttonPlay" title="Play/Pause song"><i class="zmdi zmdi-play-circle"></i></a>
                <a class="button" title="Next song"><i class="zmdi zmdi-skip-next"></i></a>
            </div>
            <div class="progress-bar">
                <KProgress :color="black"/>
            </div>       
        </div>

    </main>   
</template>

<script>
// import songs from "@/assets/js/songs";
// import {deleteElement, threatSongs, shuffleArray} from "@/assets/js/functions";
import KProgress from 'k-progress'

export default{
    name: 'Player',
    components: {
        KProgress
    }
//     data () {
//     return{
//       playing: {},
//       coverObject: { cover: true },
//       index: 0,
//       isPlaying: false,
//       currentlyTimer: "00:00",
//       songs: shuffleArray(songs),
//       player: new Audio()
//     };
//   },
//   methods: {

//   }
}
</script>

<style>
@import "../assets/styles/player.css";
@import "../assets/styles/sidebar.css";


</style>
