<template>
  <div id="TabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #TabBar {
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 1;
  }
</style>
