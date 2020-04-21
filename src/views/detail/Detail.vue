<template>
  <div class="detail">
    <detail-nav-bar />
    <scroll class="content">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopping="shopping"/>
      <detail-goods-info :detailInfo="detailInfo" />
    </scroll>
  </div>
</template>

<script>

  import DetailNavBar from "./childCpmps/DetailNavBar";
  import DetailSwiper from "./childCpmps/DetailSwiper";
  import DetailBaseInfo from "./childCpmps/DetailBaseInfo";
  import DetailShopInfo from "./childCpmps/DetailShopInfo";
  import DetailGoodsInfo from "./childCpmps/DetailGoodsInfo";

  import Scroll from "components/common/scroll/Scroll";

  import {getDetail, Goods, Shop} from "network/detail";

  export default {
    name: "detail",
    components: {
      DetailGoodsInfo,
      DetailShopInfo,
      Scroll,
      DetailBaseInfo,
      DetailSwiper,
      DetailNavBar
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopping: {},
        detailInfo: {}
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetail(this.iid)
    },
    methods: {
      getDetail(iid) {
        getDetail(iid).then(res => {
          console.log(res)
          const data = res.data.result

          // 轮播图信息
          this.topImages = data.itemInfo.topImages

          // 获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          console.log(this.goods)

          // 店铺信息
          this.shopping = new Shop(data.shopInfo)
          console.log(this.shopping)

          // 商品信息
          this.detailInfo = data.detailInfo
          console.log(this.detailInfo);
        })
      }
    }
  }
</script>

<style scoped>
  .detail {
    background: #f6f6f6;
    height: 100vh;
    position: relative;
    z-index: 2;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 0;
  }
</style>
