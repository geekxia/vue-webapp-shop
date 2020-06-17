<template lang="html">
<div>
  <h1>发现</h1>
  <div class="tabs2">
    <!-- 二级路由 -->
    <!-- 大多数情况下，exact-active-class 和 active-class 用哪个都可以 -->
    <router-link to='/find/good' tag='span' exact-active-class='on'>发现好货</router-link>
    <router-link to='/find/price' tag='span' exact-active-class='on'>发现优惠</router-link>
  </div>

  <!-- 这是二级路由的位置 -->
  <router-view></router-view>

  <TabBar></TabBar>

</div>
</template>

<script>
export default {
  components: {
    TabBar: ()=>import('@/components/common/TabBar.vue')
  }
}
</script>

<style lang="css" scoped>
.tabs2 {
  display: flex;
}
.tabs2>span {
  flex: 1;
  border: 1px solid #ccc;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
}
.tabs2>span.on {
  color: red;
}
</style>
