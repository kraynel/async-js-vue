<template>
  <div id="app">
    <img src="./assets/logo.png">
    <PromiseCall/>
  </div>
</template>

<script>
import PromiseCall from './components/PromiseCall'

export default {
  name: 'app',
  components: {
    PromiseCall
  }
}
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
