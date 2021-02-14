async function increment( { commit, dispatch }, number ) {
    commit( 'setProp', { prop: 'counter', value: number } )
    commit( 'two/setProp', { prop: 'counter', value: 9999 }, { root: true } )
    dispatch( 'two/increment', 30000, { root: true } )
}

export {
    increment
}
