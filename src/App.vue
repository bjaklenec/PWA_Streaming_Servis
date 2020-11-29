<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Player</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500&display=swap');

body{
  background-color: #f9803a8a;
}
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
.bm-burger-bars{
  background-color: rgb(54, 54, 54);
}
.bm-cross{
  background: rgb(233, 233, 233);
}
.bm-menu{
  background-color: rgb(54, 54, 54);
}
.bm-item-list > * > span{
  color: rgb(233, 233, 233);
  font-weight: 300;
}
.song{
  color: rgb(233, 233, 233);
  margin: 0;
  font-weight: 400;
  font-size: 1.4rem;
  text-align: left;
}
.artist{
  color: rgb(233, 233, 233, 0,5);
  margin-top: 0.5rem;
  font-size: 1.1rem;
  font-weight: 200;
  text-align: left;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
li{
  margin-top: 1rem;
  cursor: pointer;
}
li::after{
  display:block;
  content: '';  
  border-bottom: solid 1px rgb(233, 233, 233);  
  transform: scaleX(1);  
  transition: transform 400ms ease-in-out;
}
li:hover{
  opacity: 0.7;
}
li:hover::after{
  transform: scaleX(0);
}
@media screen and (max-width: 430px) {
    #app{
      width: 60%;
    }
}
@media screen and (max-width: 340px) {
    #app{
      width: 70%;
    }
}
</style>
