import { defineStore } from 'pinia'

export const useUIStore = defineStore( 'ui', {

  state: () => {
    return {
      isReady: false
    }
  },

  actions: {},
  getters: {}

} )