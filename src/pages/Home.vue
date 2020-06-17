<template lang="html">
<div>
  <h1>首页</h1>

  <!-- <Button>vant button</Button> -->
  <!-- <Button type="info">默认按钮</Button> -->
  <van-button size='small' type="primary">主要按钮</van-button>

  <div class='list'>

    <!-- 声明式导航（不建议这么写） -->
    <!-- <div v-for='item in goods' :key='item.id'>
      <router-link :to='"/detail/"+item.id' tag='span'>
        <span v-text='item.id'></span>
        <span>-</span>
        <span v-text='item.name'></span>
      </router-link>
    </div> -->

    <!-- 编程式导航（建议的写法） -->
    <div v-for='item in goods' :key='item.id' @click='skip(item.id)'>
      <span v-text='item.id'></span>
      <span>-</span>
      <span v-text='item.name'></span>
    </div>


    <TabBar></TabBar>

  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { Button } from 'vant'
export default {
  data: function(){
    return {
      goods: [
        { id:1, name: '笔记本', price: '5000'},
        { id:2, name: '鼠标', price: '100'},
        { id:3, name: '键盘', price: '300'},
        { id:4, name: '耳机', price: '200'}
      ]
    }
  },
  computed: {
    ...mapState('good', ['goodList']),
    ...mapState('cart', ['cartList'])
  },
  mounted() {
    console.log(this.goodList)
    console.log(this.cartList)
    console.log(this.$store)
    console.log('Button', Button)
  },
  components: {
    TabBar: ()=>import('@/components/common/TabBar.vue'),
    [Button.name]:Button
  },
  methods: {
    skip(id) {
      this.$router.push('/detail/'+id)
    }
  }
}
</script>

<style lang="css" scoped>
h1 {
  font-size: .4rem;
  color: red;
}
.list {
  display: flex;
}
.list>div {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
