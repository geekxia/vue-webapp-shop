<template lang="html">
<div class="detail">
  <van-nav-bar
    title="商品详情"
    left-text="返回"
    left-arrow
    fixed
    @click-left="onClickLeft"
  />

  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon icon="cart-o" text="购物车" />
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-button
      type="danger"
      text="立即购买"
    />
  </van-goods-action>
</div>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton, NavBar } from 'vant'
export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [NavBar.name]: NavBar
  },
  // props: ['id'],
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      // info: {}
    }
  },
  mounted() {
    // 动态路由
    console.log('动态路由', this.$route.params.id)
    // 路由传参
    console.log('路由传参', this.id)

    // 根据id调接口，获取商品详情，并赋值给声明式变量
    // this.info = 返回商品详情结果
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
