<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <sector></sector>
    <router-view></router-view>
  </div>
</template>

<script>
  import Sector from './components/sector';

  export default {
    name: 'app',
    components: { Sector },
    created() {
      this.$store.dispatch('getSector');
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  margin: 0 60px;
}
</style>
