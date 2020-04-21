<template>
  <div id="HomeSwiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgUpLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        isState: true
      }
    },
    methods: {
      imgUpLoad() {
        if (this.isState) {
          this.$emit('imgUpLoad')
          this.isState = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
