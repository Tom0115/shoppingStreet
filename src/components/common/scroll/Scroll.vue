<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      isActiveScroll: {
        type: Number,
        default: 0
      },
      isActivePullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.isActiveScroll,
        pullUpLoad: this.isActivePullUpLoad
      })

      if (this.isActiveScroll === 2 || this.isActiveScroll === 3) {
        this.scroll.on('scroll', (options) => {
          this.$emit('scroll', options)
        })
      }

      if (this.isActivePullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll && this.scroll.y
      }
    }
  }
</script>

<style scoped>

</style>
