<template>
<div id="app">
  <div class="bgc"></div>
  <div class="container">
    <Header />
    <Navbar />
    <!-- <Scrollspy /> -->
    <div id="nav">
      <router-link to="/login"></router-link>
    </div>
    <router-view/>
  </div>

</div>
</template>

<style>
@import './assets/style.css';
.bgc {
  background-image: url(./assets/background.jpg);
  background-repeat: repeat;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -999;
}
</style>

<script>
import Header from './components/header/header.vue';
import Navbar from './components/navbar/Navbar.vue';
// import Scrollspy from './components/scrollspy/Scrollspy.vue';
export default {
  components: {
    Header,
    Navbar,
    // Scrollspy,

  }
}
</script>
