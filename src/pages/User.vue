<template lang="html">
<div>
  <h1>我的</h1>

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
</style>
