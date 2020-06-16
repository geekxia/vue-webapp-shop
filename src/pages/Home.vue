<template lang="html">
<div>
  <h1>首页</h1>
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

  </div>
</div>
</template>

<script>

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
  methods: {
    skip(id) {
      this.$router.push('/detail/'+id)
    }
  }
}
</script>

<style lang="css" scoped>
.list {
  display: flex;
}
.list>div {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
