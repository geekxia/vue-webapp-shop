<template lang="html">
<div class="find">

  <div class="find-left">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>

  <div class="find-right">
    <div v-for='i in 10' :key='i'>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <span>电脑</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          <span>电脑</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          <span>电脑</span>
        </van-grid-item>
      </van-grid>
    </div>

  </div>

  <TabBar></TabBar>
</div>
</template>

<script>
import {
  Sidebar,
  SidebarItem,
  Grid,
  GridItem,
  Image,
  Row,
  Col
} from 'vant'
export default {
  components: {
    TabBar: ()=>import('@/components/common/TabBar.vue'),
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data: function() {
    return {
      activeKey: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.find {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1.33rem;
  .find-left {
    position: absolute;
    left: 0;
    width: 2.27rem;
    bottom: 0;
    top: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
  }
  .find-right {
    position: absolute;
    top: 0;
    right: 0;
    left: 2.27rem;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
  }
}
</style>
