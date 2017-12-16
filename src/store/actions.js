import * as types from './mutation-types'

export const toggleAction = async ({ commit, state }) => {
  await state.upsideDownPromise.enter()
  commit(types.UPDATE_STATUS, 'In upside down')

  const location = await state.upsideDownPromise.findDemogorgon()
  commit(types.UPDATE_STATUS, `Demogorgon in ${location}`)

  const result = await state.upsideDownPromise.killDemogorgon()
  if (result === 'SUCCESS') {
    commit(types.UPDATE_STATUS, 'Demogorgon dead ️☠️')
    return
  }

  commit(types.UPDATE_STATUS, 'You are dead ☠️')
}
