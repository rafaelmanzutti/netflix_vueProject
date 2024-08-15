import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {},
    log: false
  },
  getters: {
  },
  mutations: {
    logar(state) {
      state.log = true
    }
  },
  actions: {
  },
  modules: {
  }
})
