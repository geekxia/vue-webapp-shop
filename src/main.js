// 这是整个Vue项目的入口文件

// 安装Vue
import Vue from 'vue'
// 引入根组件
import App from './App.vue'
// 关闭项目启动的生产提示
Vue.config.productionTip = false

import router from './router'

// 创建根组件实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// $mount() 手动挂载
