<template lang="html">
<div>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

    <!-- 顶部通知栏 -->
    <van-notice-bar
      mode="closeable"
      background='#333333'
      color='#ffffff'
      left-icon="volume-o"
      scrollable>
      打开京东App，购物更轻松; 京东618，秒杀全场！手快可抢618元大红包！
    </van-notice-bar>

    <!-- 搜索 -->
    <van-search
      shape="round"
      background="#ED3861"
      placeholder="鲁花花生油"
      disabled
      show-action
    >
      <template #action>
        <div>登录</div>
      </template>
    </van-search>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image
          src="//img14.360buyimg.com/mcoss/s710x206_jfs/t1/121290/2/5076/99430/5ee9eeade521ba031/6c1798292ac89d33.jpg!q70.dpg.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//img12.360buyimg.com/mcoss/s710x206_jfs/t1/149315/4/865/102109/5eea31a7e31cae925/23a328414fd42329.png.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//img1.360buyimg.com/pop/s710x206_jfs/t1/107064/24/16928/112052/5e81a779e1e98399a/90fbe934ce1a6a65.jpg!cc_710x206!q70.dpg.webp"
        />
      </van-swipe-item>
    </van-swipe>

    <van-divider>为你推荐</van-divider>

    <van-list
      finished-text="没有更多了"
      @load="onLoad"
      offset='300'
    >
      <!-- <van-cell  /> -->
      <div @click='skip(item.id)' class='good' v-for="item in goods" :key="item.id" v-text="item.name"></div>
    </van-list>
  </van-pull-refresh>

  <TabBar></TabBar>

</div>
</template>

<script>
import {
  Button,
  NoticeBar,
  Search,
  Swipe,
  SwipeItem,
  Divider,
  List,
  PullRefresh,
  Image
} from 'vant'
export default {
  name: 'Home',
  components: {
    TabBar: ()=>import('@/components/common/TabBar.vue'),
    [Button.name]:Button,
    [NoticeBar.name]: NoticeBar,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Divider.name]: Divider,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Image.name]: Image
  },
  data: function(){
    return {
      goods: [
        { id:1, name: '笔记本', price: '5000'},
        { id:2, name: '鼠标', price: '100'},
        { id:3, name: '键盘', price: '300'},
        { id:4, name: '耳机', price: '200'},
        { id:5, name: '耳机', price: '200'},
        { id:6, name: '耳机', price: '200'},
        { id:7, name: '耳机', price: '200'},
        { id:8, name: '耳机', price: '200'},
        { id:9, name: '耳机', price: '200'},
        { id:10, name: '耳机', price: '200'},
        { id:11, name: '耳机', price: '200'}
      ],
      refreshing: false
    }
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
  methods: {
    skip(id) {
      this.$router.push('/detail/'+id)
    },
    onLoad() {
      console.log('上拉加载')
      this.goods.push({id:Date.now(), name: '测试'})
    },
    onRefresh() {
      console.log('下拉刷新')
      setTimeout(()=>{
        this.refreshing = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ED3861;
}
.good {
  line-height: 1.33rem;
  border: 1px solid #ccc;
  text-align: center;
}
.van-swipe-item {
  height: 4.5rem;
}
.van-image {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
