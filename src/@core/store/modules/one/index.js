import { StoreModule } from '@core/store/base-module.js'
import { state }       from './_state.js'
import * as actions    from './_actions.js'

const NAMESPACE = 'one'

const Module = StoreModule({
  namespaced: true,
  state:      state(),
  actions:    actions,
})

export { Module, NAMESPACE }
