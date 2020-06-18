<template lang="html">
<div class="cart">

  <!-- navbar -->
  <van-nav-bar title="购物车" left-text="返回" @click-left="onClickLeft" left-arrow fixed>
    <template #right>
      <van-icon name="ellipsis" size="18" />
    </template>
  </van-nav-bar>

  <!-- 购物车列表 -->
  <div v-for='item in list' :key='item' class="cart-good">
    <van-swipe-cell>
      <van-row type="flex" justify='center' align='center'>
        <van-col span="4">
          <!-- checkbox上下左右居中 -->
          <van-cell center>
            <van-checkbox v-model="checked"></van-checkbox>
          </van-cell>
        </van-col>
        <van-col span="20">
          <van-card
            num="1"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #footer>
              <van-button size="mini">-</van-button>
              <van-button size="mini">+</van-button>
            </template>
          </van-card>
        </van-col>
      </van-row>
      <!-- 左滑删除 -->
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>


  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
    <template #tip>
      你的收货地址不支持同城送, <span @click="onEdit">修改地址</span>
    </template>
  </van-submit-bar>


  <!-- <TabBar></TabBar> -->
</div>
</template>

<script>
import {
  Card,
  Button,
  SubmitBar,
  Checkbox,
  Row,
  Col,
  Cell,
  SwipeCell,
  NavBar,
  Icon
} from 'vant'
export default {
  components: {
    // TabBar: ()=>import('@/components/common/TabBar.vue'),
    [Card.name]: Card,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Row.name]: Row,
    [Col.name]: Col,
    [Cell.name]: Cell,
    [SwipeCell.name]: SwipeCell,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  },
  data: function() {
    return {
      list: [1,2,3,4,5,6,7,8,9,10],
      checked: true
    }
  },
  methods: {
    onEdit() {
      console.log('修改收货地址')
    },
    onSubmit() {
      console.log('提交')
    },
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  padding-bottom: 2rem;
  padding-top: 1.33rem;
}
.cart-good {
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}
.van-card {
  background: #fff;
  padding-left: 0;
}
// .van-checkbox {
//   text-align: center;
//   display: inline-block;
// }
.goods-card {
    margin: 0;
    background-color: #fff;
  }

  .delete-button {
    height: 100%;
  }
</style>
