import * as types from './mutation-types'

export const toggleAction = async ({ commit, state }) => {
  state.upsideDownPromise
    .enter()
    .then(() => {
      commit(types.UPDATE_STATUS, 'In upside down')
      return state.upsideDownPromise.findDemogorgon()
    })
    .then(location => {
      commit(types.UPDATE_STATUS, `Demogorgon in ${location}`)
      return state.upsideDownPromise.killDemogorgon()
    })
    .then(result => {
      if (result === 'SUCCESS') {
        commit(types.UPDATE_STATUS, 'Demogorgon dead ️☠️')
        return
      }

      commit(types.UPDATE_STATUS, 'You are dead ☠️')
    })
}
