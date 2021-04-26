<style scoped lang="scss">
  .btn {
    @apply bg-pink-400 p-3 m-1;
  }
</style>

<template>

  <router-view />

</template>

<script>

  import { useStore } from 'vuex'
  import { computed } from 'vue'

  export default {
    name: 'App',
    setup() {

      const store = useStore()
      const counter = computed(() => store.$GET('one.counter'))

      return {
        counter,
        setCounter: ( action ) => action ?
          store.$ACTION({ type: 'one/increment', payload: counter.value + 1 })
          : store.$SET({ prop: 'one.counter', value: counter.value - 1 })
      }
    }
  }
</script>
