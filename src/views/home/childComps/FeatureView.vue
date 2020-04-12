<template>
  <div id="FeatureView">
    <div class="feature-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  #FeatureView {
    display: flex;
    padding: 10px 0 20px;
    font-size: var(--font-size);
    border-bottom: 8px solid #f6f6f6;
    background-color: #fff;
    margin-top: -3px;
  }

  .feature-item {
    flex: 1;
    text-align: center;
  }

  .feature-item img {
    width: 70px;
  }

  .feature-item span {
    display: inline-block;
    padding-top: 10px;
  }
</style>
