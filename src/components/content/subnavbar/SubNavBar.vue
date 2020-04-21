<template>
  <div id="SubNavBar">
    <div class="sub-nav-bar-item"
         v-for="(item, index) in titles"
         :key="index"
         :class="{active: currentIndex === index}"
         @click="cutSubNavBtn(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubNavBar",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      cutSubNavBtn(index) {
        this.currentIndex = index
        this.$emit('cutSubNav', index)
      }
    }
  }
</script>

<style scoped>
  #SubNavBar {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }

  .sub-nav-bar-item {
    flex: 1;
  }

  .sub-nav-bar-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-tint);
  }

  .active span {
    border-bottom: 2px solid var(--color-tint);
  }

</style>
