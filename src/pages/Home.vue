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
import { mapState, mapActions } from 'vuex'
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
    var params = {
      ct:24,
      qqmusic_ver:1298,
      new_json:1,
      remoteplace:'txt.yqq.song',
      searchid: 54616638128860322,
      t:0,
      aggr:1,
      cr:1,
      catZhida:1,
      lossless:0,
      flag_qc:0,
      p:1,
      n:10,
      w:'%E5%91%A8%E6%9D%B0%E4%BC%A6',
      g_tk_new_20200303:5381,
      g_tk:5381,
      loginUin:0,
      hostUin:0,
      format:'json',
      inCharset:'utf8',
      outCharset:'utf-8',
      notice:0,
      platform:'yqq.json',
      needNewCode:0
    }
    this.getQqMusic(params)
  },
  components: {
    TabBar: ()=>import('@/components/common/TabBar.vue'),
    [Button.name]:Button
  },
  methods: {
    ...mapActions('music', ['getQqMusic']),
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
