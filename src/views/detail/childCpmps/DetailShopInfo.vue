<template>
  <div class="detail-shop-info" v-if="Object.keys(shopping).length !== 0">
    <div class="shopping-top">
      <img :src="shopping.logo" alt="">
      <p>{{shopping.name}}</p>
    </div>
    <div class="shopping-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <span class="sells-count">
            {{shopping.sells | sellCountFilter}}
          </span>
          <span class="sells-text">总销量</span>
        </div>
        <div class="info-goods">
          <span class="goods-count">{{shopping.goodsCount}}</span>
          <span class="goods-text">全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="item in shopping.score">
            <td>{{item.name}}</td>
            <td :class="item.isBetter? 'active' : 'deactive' ">{{item.score}}</td>
            <td :class="item.isBetter? 'active' : 'deactive' ">{{item.isBetter? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopping-bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopping: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info {
    background: #fff;
    padding: 10px;
    margin-top: 10px;
  }

  .shopping-top {
    display: flex;
    align-items: center;
  }

  .shopping-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .shopping-top p {
    margin-left: 10px;
  }

  .shopping-middle {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .shop-middle-left {
    display: flex;
    border-right: 1px solid rgba(0,0,0,.1);
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .info-sells,
  .info-goods {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  .sells-count,
  .goods-count {
    font-size: 18px;
  }

  .shop-middle-right {
    /*margin-left: 30px;*/
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 12px;
  }

  .sells-text,
  .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .shop-middle-right table {
    width: 120px;
    margin-left: 16px;
  }

  .shop-middle-right table td {
    padding: 5px 0 ;
  }

  .shopping-bottom {
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    margin: 20px auto 0;
  }

  .active {
    color: #5ea732;
  }

  .deactive {
    color: #f13e3a;
  }
</style>
