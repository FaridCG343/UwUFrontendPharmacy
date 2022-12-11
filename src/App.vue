<template>
  <StartMenu/>
</template>

<script>
import StartMenu from './components/loginScreen/StartMenu.vue'

export default {
  name: 'App',
  components: {
    StartMenu
  }
}
</script>

<style>


@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

#app {
  font-family: "Merienda";
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 40%;
  width: 100%;
}
</style>
