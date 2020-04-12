<template>
  <div id="GoodsList">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #GoodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 7px;
    font-size: 12px;
  }
</style>
