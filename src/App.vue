<template>
  <div class="app">
    <img src="./assets/logo.png" width="100" />
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <!-- <div>
      <router-link to="/foo">Player List</router-link>
      <router-link to="/bar">About</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  watch: {
    $route(to, from) {
      console.log("Route changed from " + from.path + " to " + to.path);
      console.log("From", from);
      console.log("to", to);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
