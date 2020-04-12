<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
  import Home from "views/home/Home";

  export default {
    name: 'app',
    components: {
      Home
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
