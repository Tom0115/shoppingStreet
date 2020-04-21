<template>
  <div class="detail-goods-info">
    <p class="desc">{{detailInfo.desc}}</p>
    <span class="text">{{detailInfo.detailImage[0].key}}</span>
    <div class="images">
      <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .detail-goods-info {
    margin-top: 10px;
    background: #fff;
  }

  .desc {
    padding: 10px;
    font-size: 14px;
  }

  .text {
    display: inline-block;
    padding: 10px;
  }

  .images img {
    width: 100%;
  }
</style>
