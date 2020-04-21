<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <sub-nav-bar
            :titles="['流行', '新款', '精选']"
            @cutSubNav="cutSubNav"
            v-show="subBarIsShow"
            class="promoteIndex"
            ref="subNavBarElement1"
    />
    <scroll
            class="content"
            ref="scroll"
            :is-active-scroll="3"
            :is-active-pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners" @imgUpLoad="imgUpLoad" />
      <feature-view :recommends="recommends"/>
      <week-popular />
      <sub-nav-bar
              :titles="['流行', '新款', '精选']"
              @cutSubNav="cutSubNav"
              ref="subNavBarElement2"
      />
      <goods-list :goods="goodsList[currentColumn].list"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>

  import HomeSwiper from "./childComps/HomeSwiper";
  import FeatureView from "./childComps/FeatureView";
  import WeekPopular from "./childComps/WeekPopular";
  import GoodsList from "./childComps/GoodsList";

  import SubNavBar from "components/content/subnavbar/SubNavBar";
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backtop/BackTop";

  import { getHomeMultidata, getHomeData } from 'network/home'

  export default {
    name: "Home",
    components: {
      BackTop,
      GoodsList,
      SubNavBar,
      WeekPopular,
      FeatureView,
      HomeSwiper,
      NavBar,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        currentColumn: 'pop',
        goodsList: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        isShowBackTop: false,
        subBarIsShow: false,
        subBarOffsetTop: 0,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultiData()

      this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
    },
    mounted() {

    },
    updated() {
      // 遗留的refresh找不到的问题
      this.$bus.$on('changeItemImg', () => {
        this.$refs.scroll.refresh()
      })
      this.$refs.scroll.refresh()
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
      cutSubNav(index) {
        switch (index) {
          case 0:
            this.currentColumn = 'pop';
            break;
          case 1:
            this.currentColumn = 'new';
            break;
          case 2:
            this.currentColumn = 'sell';
            break;
        }
        this.$refs.subNavBarElement1.currentIndex = index
        this.$refs.subNavBarElement2.currentIndex = index
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(options) {
        this.isShowBackTop = (-options.y) > 1000
        this.subBarIsShow = (-options.y) >= this.subBarOffsetTop;
      },
      pullingUp() {
        this.getHomeData(this.currentColumn)
      },
      imgUpLoad() {
        this.subBarOffsetTop = this.$refs.subNavBarElement2.$el.offsetTop
      },
      /**
       * 网络请求相关方法
       */
      getHomeMultiData() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getHomeData(type) {
        getHomeData(type, this.goodsList[type].page).then(res => {
          const goodsList = res.data.data.list
          this.goodsList[type].list.push(...goodsList)
          this.goodsList[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #Home {
    background-color: #f6f6f6;
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }

  .promoteIndex {
    position: relative;
    z-index: 2;
  }
</style>
