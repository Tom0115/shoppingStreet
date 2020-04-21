<template>
  <div id="CurrentNavBar">
    <tab-bar>
      <tab-bar-item link="/" active="#ff8198">
        <span slot="item-icon" class="fa fa-home"></span>
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item link="/Classify" active="#ff8198">
        <span slot="item-icon" class="fa fa-navicon"></span>
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item link="/ShoppingCart" active="#ff8198">
        <span slot="item-icon" class="fa fa-shopping-cart"></span>
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item link="/User" active="#ff8198">
        <span slot="item-icon" class="fa fa-user-circle-o"></span>
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

  import TabBar from "common/tabbar/TabBar";
  import TabBarItem from "common/tabbar/TabBarItem";

  export default {
    name: "CurrentNavBar",
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
