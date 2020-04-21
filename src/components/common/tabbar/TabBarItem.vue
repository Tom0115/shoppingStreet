<template>
  <div class="tab-bar-item">
    <router-link :to="this.link" :style="activeBtn">
      <div class="item-icon">
        <slot name="item-icon"></slot>
      </div>
      <div class="item-text">
        <slot name="item-text"></slot>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: {
        type: String,
        default() {
          return '/'
        }
      },
      active: {
        type: String,
        default() {
          return 'skyblue'
        }
      }
    },
    data() {
      return {}
    },
    computed: {
      activeBtn() {
        return this.$route.path === this.link ? {color: this.active} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    height: 100%;
    flex: 1;
    text-align: center;
    color: #646566;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .item-icon {
    font-size: 22px;
  }

  .item-text {
    font-size: 12px;
    margin-top: 2px;
  }
</style>
