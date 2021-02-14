<style scoped lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>

<template>

    <main class="text-gray-600">
        <h1>APP {{ counter }}</h1>
        <p>name: {{ $store.$GET('one.user.name') }}</p>
        <p>email: {{ $store.$GET('one.user.email') }}</p>
        <p>messages: {{ $store.$GET('one.user.messages[0]') }}</p>
        <button @click="setCounter(true)">counter +</button>
        <button @click="setCounter(false)">counter -</button>
    </main>

</template>

<script>

    import { useStore } from 'vuex'

    export default {
        name: 'App',
        setup() {

            const store = useStore()

            // const to = setTimeout( () => {
            //     // store.$SET( {
            //     //     prop:  'one.user',
            //     //     value: {
            //     //         name:     'aaaa',
            //     //         email:    'aaaaaa@email',
            //     //     }
            //     // } )
            //     // store.$SET( {
            //     //     prop:  'one.user.messages[1]',
            //     //     value: ['Second message']
            //     // } )
            //     return clearTimeout( to )
            // }, 3000 )

            store.commit('one/setProp', { prop: 'user.name', value: 'user name'})

            const counter = store.$GET('one.counter')

            store.commit( 'one/setProp', { prop: 'counter', value: counter + 1} )

            return {
                counter,
                setCounter: ( action ) => action ?
                    store.commit( 'one/setProp', { prop: 'counter', value: counter + 1} )
                    : store.commit( 'one/setProp', { prop: 'counter', value: counter - 1} )
            }
        }
    }
</script>
