<template>
  <div class="goods-list-item">
    <img v-lazy="goodsItem.show.img" alt="">
    <div class="goodsMessage">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="cfav fa fa-star-o">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
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
  .goods-list-item {
    width: 45%;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .goods-list-item img{
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .goodsMessage {
    width: 90%;
    margin: 5px auto;
  }

  .goodsMessage p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }


  .price {
    color: var(--color-tint);
  }

  .cfav {
    margin-left: 10px;
  }
</style>
