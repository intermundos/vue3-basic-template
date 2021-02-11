import { state }       from './_state.js'
import { StoreModule } from '@core/store/base-module.js'

const oneStoreModule = StoreModule({
    namespaced: true,
    state:      state(),
    actions:    {},
    mutations:  {}
})

export { oneStoreModule }
