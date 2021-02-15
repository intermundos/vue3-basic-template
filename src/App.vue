<style scoped lang="scss">
    .btn {
        @apply bg-pink-400 p-3 m-1;
    }
</style>

<template>

    <main class="text-gray-600">

        <h1>APP {{ counter }}</h1>

        <div>
            counter two : {{ $store.$GET('two.counter') }}
        </div>

        <button class="btn" @click="setCounter(true)">counter +</button>
        <button class="btn" @click="setCounter(false)">counter -</button>

        <br><br><br>

        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition || 'fade'">
                <component :is="Component" :class="[route.name, route.meta.classes]" />
            </transition>
        </router-view>
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

            return {
                counter,
                setCounter: ( action ) => action ?
                    store.$ACTION( { type: 'one/increment', payload: counter.value + 1 } )
                    : store.$SET( { prop: 'one.counter', value: counter.value - 1 } )
            }
        }
    }
</script>
