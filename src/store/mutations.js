import * as types from './mutation-types'

const updateStatus = (state, newStatus) => {
  state.status = newStatus
}

export const mutations = {
  [types.UPDATE_STATUS]: updateStatus
}
