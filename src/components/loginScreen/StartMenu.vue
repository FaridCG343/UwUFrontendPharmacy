<template>
  <div class="container" style="display: flex; height: 100%; ">
    <LeftMainMenu class="left" />
    <RightMainMenu class="right" />
  </div>
</template>

<script>
import RightMainMenu from './RightMainMenu.vue'
import LeftMainMenu from './LeftMainMenu.vue';

export default {

  name: 'StartMenu',
  components: {
    RightMainMenu,
    LeftMainMenu
  },
  props: {
  },
  data() {
    return {
      // data
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height: 100%;
}

body {
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
}

.left {
  width: 65%;
  height: 100%;
  background: #D0F4DE;
}

.right {
  flex-grow: 1;
  background: #FFDEEE;

}
</style>
