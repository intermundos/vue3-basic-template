<style scoped lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .btn {
        @apply bg-pink-400 p-3 m-1;
    }
</style>

<template>

    <main class="text-gray-600">
        <h1>APP {{ counter }}</h1>
        <button class="btn" @click="setCounter(true)">counter +</button>
        <button class="btn" @click="setCounter(false)">counter -</button>
    </main>

</template>

<script>

    import { useStore } from 'vuex'
    import { computed } from 'vue'

    export default {
        name: 'App',
        setup() {

            const store = useStore()

            const counter = computed( () => store.$GET( 'one.counter' ) )

            store.$ACTION( {
                type:    'one/increment',
                payload: 100
            } )

            return {
                counter,
                setCounter: ( action ) => action ?
                    store.$ACTION( { type: 'one/increment', payload: counter.value + 1 } )
                    : store.$SET( { prop: 'one.counter', value: counter.value - 1 } )
            }
        }
    }
</script>
