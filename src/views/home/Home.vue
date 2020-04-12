<template>
  <div id="Home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <feature-view :recommends="recommends"/>
    <week-popular/>
    <sub-nav-bar
            :titles="['流行', '新款', '精选']"
            @cutSubNav="cutSubNav"
    />
    <goods-list :goods="goodsList[currentColumn].list" />
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import FeatureView from "./childComps/FeatureView";
  import WeekPopular from "./childComps/WeekPopular";
  import SubNavBar from "components/content/SubNavBar";
  import GoodsList from "./childComps/GoodsList";

  import {getHomeMultidata, getHomeData} from 'network/home'

  export default {
    name: "Home",
    components: {
      GoodsList,
      SubNavBar,
      WeekPopular,
      FeatureView,
      HomeSwiper,
      NavBar
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
        }
      }
    },
    created() {
      this.getHomeMultiData()
      this.getHomeData('pop')
      this.getHomeData('new')
      this.getHomeData('sell')
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
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  #Home {
    background-color: #f6f6f6;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);
  }
</style>
