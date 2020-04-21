<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <p class="goods-title">{{goods.title}}</p>
    <div class="goods-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span :class="goods.discount? 'discount' : '' ">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span v-for="item in goods.columns">
        {{item}}
      </span>
    </div>
    <div class="services">
      <span v-for="item in goods.services" class="services-item">
        <img :src="item.icon" />
        <span>{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
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
  .detail-base-info {
    padding: 10px;
    background: #fff;
  }

  .goods-price {
    margin-top: 10px;
  }

  .new-price {
    color: var(--color-high-text);
    font-size: 24px;
  }

  .old-price {
    font-size: 12px;
    margin-left: 5px;
    text-decoration: line-through;
    color: #999;
  }

  .discount {
    color: #fff;
    font-size: 12px;
    padding: 2px 5px;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -8px;
  }

  .columns {
    display: flex;
    margin-top: 15px;
    font-size: 12px;
    text-align: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .columns span {
    height: 30px;
    line-height: 30px;
  }

  .services {
    margin-top: 10px;
  }

  .services-item {
    text-align: center;
    margin-right: 10px;
  }

  .services-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .services-item span {
    font-size: 12px;
    margin-left: 5px;
  }
</style>
