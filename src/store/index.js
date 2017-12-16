import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { mutations } from './mutations'
import UpsideDownPromise from '../services/UpsideDownPromise'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    upsideDownPromise: new UpsideDownPromise(),
    status: 'In real world'
  },
  actions,
  mutations,
  strict: debug
})
