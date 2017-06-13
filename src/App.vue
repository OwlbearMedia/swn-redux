<template>
  <div id="app" class="container">
    <!--<img src="./assets/logo.png">-->
    <div class="row">
      <div class="header col-xs-12">

        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">Stars Without Number</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><a href="#/spacebook">Spacebook</a></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <sector></sector>
      </div>
      <div class="col-md-6">
        <router-view></router-view>
      </div>
    </div>
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
    color: #2c3e50;
  }

  .navbar-brand {
    border-right: 1px solid #e7e7e7;
  }
</style>
