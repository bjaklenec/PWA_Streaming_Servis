<template>
    <main>
        <div class="title">
            <h1>Allegro</h1>
            <p class="SmallTitle">Best streaming service</p>
        </div>
        <div class="Player">
            <div class="AlbumCover">
                <p>Album Cover</p>
            </div>
            <div class="info">
                <p>Artist:</p>
                <p>Song:</p>
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
    font-family: Raleway;
}
.SmallTitle{
    font-weight: 300;
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
    color: #f9803a8a;
    vertical-align: middle;
	cursor: pointer;
}
.buttonPlay{
    font-size: 4rem;
    margin: 0 1.5rem;
    color: #f9813a;
	cursor: pointer;
    vertical-align: middle;
}
</style>
