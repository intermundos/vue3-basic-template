import { isProduction } from '@core/config/environment'
import { setter } from './utils/helpers.js'


const StoreModule = ( { state = {}, actions = {}, getters = {}, mutations = {}, devtools = !isProduction } ) => {

  return {
    namespaced: true,
    state:      state,
    getters:    getters,
    actions:    actions,
    mutations:  {
      ...mutations,
      setProp: ( state, config ) => setter(state)(config)
      // setProp will available in every store module as
      // commit('setProp', { prop: 'prop name', value: 'value to set })

    },
    devtools,
  }
}

export { StoreModule }
