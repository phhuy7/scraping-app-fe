<template>
  <div id="app">
  <ProductCrawler />
  </div>
</template>

<script>
import ProductCrawler from './components/ProductCrawler.vue';


export default {
  name: 'App',
  components: {
    ProductCrawler
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
