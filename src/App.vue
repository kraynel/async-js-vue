<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div class="hello">
      <h1>Async calls in vue</h1>

      <PromiseCall />
      <VuexCall />
    </div>
  </div>
</template>

<script>
import PromiseCall from './components/PromiseCall'
import VuexCall from './components/VuexCall'

export default {
  name: 'app',
  components: {
    PromiseCall,
    VuexCall
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
