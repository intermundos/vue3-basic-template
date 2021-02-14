import { state }       from './_state.js'
import { StoreModule } from '@core/store/base-module.js'

const NAMESPACE = 'one'

const Module = StoreModule({
    namespaced: true,
    state:      state(),
    actions:    {},
    mutations:  {}
})


export { Module, NAMESPACE }
