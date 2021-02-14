import { createStore }  from 'vuex'
import { enhanceStore } from './utils/helpers.js'
import * as One         from '@core/store/modules/one'

const store = createStore( {
    modules: {
        [ One.NAMESPACE ]: One.Module
    }
} )

enhanceStore( store )

export { store }
