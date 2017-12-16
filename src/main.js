// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import UpsideDownPromise from '@/services/UpsideDownPromise'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    upsideDownPromise: new UpsideDownPromise(),
    status: 'In real world'
  },
  mutations: {
    updateStatus(state, newStatus) {
      state.status = newStatus
    }
  },
  actions: {
    async toggleAction({ commit, state }) {
      state.upsideDownPromise
        .enter()
        .then(() => {
          commit('updateStatus', 'In upside down')
          return state.upsideDownPromise.findDemogorgon()
        })
        .then(location => {
          commit('updateStatus', `Demogorgon in ${location}`)
          return state.upsideDownPromise.killDemogorgon()
        })
        .then(result => {
          if (result === 'SUCCESS') {
            commit('updateStatus', 'Demogorgon dead ️☠️')
            return
          }

          commit('updateStatus', 'You are dead ☠️')
        })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
