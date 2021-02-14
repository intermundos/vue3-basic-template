import { StoreModule } from '@core/store/base-module.js'
import { state }       from './_state.js'
import * as actions    from './_actions.js'

const NAMESPACE = 'two'

const Module = StoreModule( {
    namespaced: true,
    state:      state(),
    actions:    actions,
    devtools:   true
} )


export { Module, NAMESPACE }
