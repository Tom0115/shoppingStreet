<template>
  <div id="app">
    <current-nav-bar />
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

  import CurrentNavBar from "components/content/currenttabbar/CurrentTabBar";

  export default {
    name: 'app',
    components: {
      CurrentNavBar
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
