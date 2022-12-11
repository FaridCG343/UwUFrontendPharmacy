<template>
 <div class="container" style="display: flex; height: 100%; ">
        <div style="width: 75%; background: green;">
          <div id="title">
            <div></div>
            <h1>Farmacia UwU</h1>
            <div></div>


          </div>
          <div id="gridMainMenu"></div>
          <div id="cancel"></div>
        </div>
        <div style="flex-grow: 1; background: blue;">
            Right Div
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
      return {
        // data
      }
    },
    methods: {
      doWork () {
        // the work
      }
    }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: auto;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background: rgba(114, 186, 94, 0.05);
  border: 2px dashed rgba(114, 186, 94, 0.35);
}




</style>
