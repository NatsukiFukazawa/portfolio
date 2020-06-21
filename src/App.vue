<template>
  <div id="app">
    <myheader />
    <top></top>
    <router-view />
    <myfooter />
  </div>
</template>

<script>
import myheader from "./components/myheader";
import myfooter from "./components/footer";
import top from "./components/top";

export default {
  name: "App",
  components: {
    myheader,
    myfooter,
    top,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
