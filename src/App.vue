<template>
  <div class="app">

    <!-- 路由的视图容器 -->
    <!-- 它的作用就是告诉vue在哪里显示路由匹配的组件 -->
    <!-- 用于显示匹配成功的页面组件 -->
    <!-- 它的默认名字叫default -->
    <!-- 这是一级路由的位置 -->
    <router-view></router-view>

    <!-- 命名视图 -->
    <!-- <router-view name='aaa'></router-view>
    <router-view name='bbb'></router-view>
    <router-view name='ccc'></router-view> -->

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('路由', this.$route)
    console.log('路由', this.$router)
  }
}
</script>

<style lang="scss">
// @import './assets/common.scss';
@import '@/assets/common.scss';

// 全局样式
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: $size3;
}
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
