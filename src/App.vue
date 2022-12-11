<template>
  <StartMenu style="min-height: 100vh;"/>
</template>

<script>
import StartMenu from './components/StartMenu.vue'

export default {
  name: 'App',
  components: {
    StartMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
