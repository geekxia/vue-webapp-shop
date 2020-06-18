import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import good from './modules/good'
import cart from './modules/cart'
import music from './modules/music'

const store = new Vuex.Store({
  modules: {
    good,
    cart,
    music
  }
})

export default store
