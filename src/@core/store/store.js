import { createStore }    from 'vuex'
import { enhanceStore } from './utils/helpers.js';
import { oneStoreModule } from '@core/store/modules/one'

const store = createStore( {
    modules: {
        one: oneStoreModule
    }
} )

enhanceStore(store)

export { store }
