<style scoped lang="scss">

</style>

<template>

    <header>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </header>

    <main>
        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition || 'fade'">
                <component :is="Component" :class="[route.name, route.meta.classes]" />
            </transition>
        </router-view>
    </main>

    <footer>Footer</footer>

</template>

<script>
    export default {
        name: 'deafult.layout'
    }
</script>
