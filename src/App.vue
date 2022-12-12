<template>
  <ul>
    <li><router-link to="/ventas">Ventas</router-link></li>
    <li><router-link to="/products">Productos</router-link></li>

    <li><router-link to="/">Login</router-link></li>
    <li><router-link to="/user">User</router-link></li>
    <li><router-link to="/">Logout</router-link></li>
  </ul>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

#app {
  font-family: "Merienda";
  -webkit-font-smoothing: antialiased;
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
  margin-right: 0s;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
