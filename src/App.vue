<template>

  <router-view v-slot="{ Component, route }"/>
  
</template>

<script>

  import { computed }   from 'vue'
  import { useUIStore } from '@modules/ui/ui.store.js'

  export default {
    name: 'App',
    setup() {
      const store = useUIStore()
      return {
        isReady: computed( () => store.isReady )
      }
    }
  }
</script>
