import set from 'lodash/set'
import get from 'lodash/get'

const getter = ( state ) => ( prop ) => get( state, prop )
const setter = ( state ) => ( { prop, value } ) => {
    if ( !get( state, prop ) ) {
        throw new Error( `Unknown state property ${prop}` )
    }
    set( state, prop, value )
}


export function enhanceStore( store ) {

    store.$GET = getter( store.state )
    store.$SET = setter( store.state )

    return store
}

export {
    setter,
    getter,
}
