<template>
    <main>
        
        <div class="title">
            <h1>Allegro</h1>
            <p id="copr">© 2020, Borna Jaklenec. All rights reserved</p>
        </div>
        <div class="Player">
            <div class="AlbumCover">
                <img src="../assets/AlbumCover.jpeg" alt="Cover" width="80%">
            </div>
            <div class="info">
                <p id="song">Kaktus</p>
                <p id="artist">Flaneur</p>
            </div>
            <div class="PlayerButtons">
                <a class="button" title="Previous Song"><i class="zmdi zmdi-skip-previous"></i></a>
                <a class="buttonPlay" title="Play/Pause song"><i class="zmdi zmdi-play-circle"></i></a>
                <a class="button" title="Next song"><i class="zmdi zmdi-skip-next"></i></a>
            </div>

        </div>
        
    </main>
    
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{
    margin: 0 auto;
    color:rgb(54, 54, 54);
    position: relative;
}
h1{
    margin: 1rem;
}
#copr{
    font-weight: 300;
    margin-bottom: 1rem;
}
.Player{
    margin: 0 auto;
    background-color:rgb(233, 233, 233);
    width: 50%;
    border-radius: 1rem;
    padding: 2rem;
    min-height: 25rem;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 12px 12px rgba(0, 0, 0, 0.2);
}
.PlayerButtons{
    margin: 0 auto;
    position: relative;
    text-align: center;
}
.button{
    display: inline-block;
    font-size: 2rem; 
    padding: 1rem;
    margin: 0 0.25rem;
    color: rgba(54, 54, 54, 0.4);
    vertical-align: middle;
	cursor: pointer;
}
.buttonPlay{
    font-size: 4rem;
    margin: 0 1.5rem;
    color: rgb(54, 54, 54);
	cursor: pointer;
    vertical-align: middle;
}
.AlbumCover{
    margin: 0 auto;
    width: 70%;
    height: 70%;
}
img{
    width: 100%;
	height: 100%;
	z-index: 10;
	object-fit: cover;
    border-radius: 1rem;
}
#song{
    font-size: 1.5rem;
    font-weight: 500;
    margin: 2rem 0 0 0;
}
#artist{
    margin: 0.5rem 0 2rem 0;
    font-size: 1rem;
    color: rgb(110, 110, 110);
}
.title{
    text-align: center;
}
@media screen and (max-width: 1000px) {
    .Player{
        width: 60%
    }
    .AlbumCover{
        width: 80%;
    } 
}
@media screen and (max-width: 800px) {
    .Player{
        width: 80%;
        padding: 0;
    }
    .AlbumCover{
        width: 80%;
        padding-top: 20px;
    }
}
@media screen and (max-width: 630px) {
    .Player{
        width: 100%;
    }
    .buttonPlay{
        font-size: 3.5rem;
    }
    .PlayerButtons{
        padding-bottom: 30px;
    }
    .AlbumCover{
        width: 80%;
        padding-top: 20px;
        margin: 0 auto;
    }
}
</style>
