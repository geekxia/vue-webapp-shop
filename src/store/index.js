import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import good from './modules/good'
import cart from './modules/cart'

const store = new Vuex.Store({
  modules: {
    good,
    cart
  }
})

export default store
