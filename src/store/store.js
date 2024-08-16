import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {},
    log: false,
    emptyProfile: true

  },
  mutations: {
    setLog(state) {
      state.log = true
    },
    setProfile(state, payload) {
      state.profile = payload
    },
    setEmptyProfile(state) {
      state.emptyProfile = false
    }
  }
})
