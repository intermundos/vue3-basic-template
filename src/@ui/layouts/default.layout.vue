<style scoped lang="scss">

</style>

<template>

    <header class="p-3 bg-indigo-500">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </header>

    <main>
        <router-view v-slot="{ Component, route }">
            <transition name="fade" appear mode="ease-in" duration="100">
                <component :is="Component" :class="[route.name, route.meta.classes]" />
            </transition>
        </router-view>
    </main>

    <footer>Footer</footer>

</template>

<script>
    export default {
        name: 'default.layout'
    }
</script>
