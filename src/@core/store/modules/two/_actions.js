async function increment( { commit }, number ) {
  commit('setProp', { prop: 'counter', value: number })
}

export {
  increment
}
