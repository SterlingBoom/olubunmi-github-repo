<template>
  <div class="container">
      <Navigation />
      <router-view />
    </div>

</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation,
  },
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Lato:wght@300&family=Open+Sans:wght@300&family=Tiro+Gurmukhi&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
