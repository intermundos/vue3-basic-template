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
 * Adds helper functions to the store
 * @param store
 * @return {*}
 */
export function enhanceStore( store ) {

    store.$GET = getter( store.state )
    store.$SET = setter( store.state )

    return store
}

export {
    setter,
    getter,
}
