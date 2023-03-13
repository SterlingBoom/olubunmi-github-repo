
<template>
  <div class="app">
      <Navigation />
      <router-view />
    </div>

</template>

<script setup>
import Navigation from './components/Navigation.vue'
// import RepoDetails from './components/RepoDetails.vue'

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Lato:wght@300&family=Open+Sans:wght@300&family=Tiro+Gurmukhi&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-align: center;
}
.app {
  /* min-height: 100vh; */
  position: relative;
  /* background-color: rgba(245, 240, 235, 0.892); */
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}

</style>
