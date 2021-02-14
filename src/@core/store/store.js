import { createStore }  from 'vuex'
import { enhanceStore } from './utils/helpers.js'
import * as One         from '@store/modules/one'
import * as Two         from '@store/modules/two'

const store = createStore( {
    modules: {
        [ One.NAMESPACE ]: One.Module,
        [ Two.NAMESPACE ]: Two.Module,
    }
} )

enhanceStore( store )

export { store }
