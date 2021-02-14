import { Utils } from '@core/utils'

/**
 * Curried getter
 * Receives state as the first argument
 * @param state
 * Receives props as the second argument -> 'moduleNamespace.property.nested
 * @param state
 * @return {function(*=): *}
 */
const getter = ( state ) => ( prop ) => Utils.OBJECTS.get( state, prop )

/**
 * Curried setter
 * Receives state as the first argument
 * @param state
 * Receives {Object} as the second argument { prop: 'state property to be set', value: 'values to be set' }
 * @example $SET = setter(state), later on $SET({ prop: '<module name>.<property>'})
 * @example $SET = setter(state), later on $SET({ prop: 'module.user', value: 'User' })
 * @return {function(...[*]=)}
 */
const setter = ( state ) => ( { prop, value } ) => {
    if ( Utils.VALUES.isUndefined( Utils.OBJECTS.get( state, prop ) ) ) {
        throw new Error( `Unknown state property ${ prop }` )
    }
    Utils.OBJECTS.set( state, prop, value )
}

/**
 * Curried action helper
 * Receives store as the first argument
 * @param store
 * Receives {Object} as the second argument { type: 'action type -> module name/action name, payload: 'action payload' }
 * @example $ACTION = action(store), later on $ACTION({ type: '<module name>/<action name>', payload: any })
 * @example $ACTION = action(store), later on $ACTION({ type: 'one/increment', payload: 100 })
 * @return {function({type?: *, payload?: *}): *}
 */
const action = ( store ) => ( { type, payload } ) => {
    console.log('got action', type, payload)
    return store.dispatch( type, payload )
}

/**
 * Adds helper functions to the store
 * @param store
 * @return {*}
 */
export function enhanceStore( store ) {

    store.$GET = getter( store.state )
    store.$SET = setter( store.state )
    store.$ACTION = action( store )

    return store
}

export {
    setter,
    getter,
}
