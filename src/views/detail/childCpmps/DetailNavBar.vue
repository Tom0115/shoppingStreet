<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <span slot="left" class="fa fa-angle-left" @click="back"></span>
      <div slot="center" class="titles">
        <span
                v-for="(item, index) in titles"
                :key="index"
                class="titles-item"
                :class="{active: currentIndex === index}"
                @click="activeBtn(index)"
        >
          {{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {NavBar},
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      activeBtn(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .detail-nav-bar {
    background: #fff;
    position: relative;
    z-index: 2;
  }

  .fa-angle-left {
    font-size: 24px;
    margin-top: 10px;
  }

  .titles {
    display: flex;
  }

  .titles-item {
    font-size: 12px;
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
