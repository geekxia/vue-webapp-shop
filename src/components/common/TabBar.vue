<template lang="html">
<van-tabbar route>
  <van-tabbar-item to='/home' icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to='/find' icon="search" dot>发现</van-tabbar-item>
  <van-tabbar-item to='/cart' icon="friends-o" badge="5">购物车</van-tabbar-item>
  <van-tabbar-item to='/user' icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'TabBar',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style lang="scss" scoped>
</style>
