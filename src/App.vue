<template>
  <StartMenu />
</template>

<script>
import StartMenu from './components/ventasScreen/MainSales.vue';

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

body {
  margin-top: 0;
  margin-left: 0;
  margin-bottom: 0;
  margin-right: 0;
  display: contents;
}
</style>
