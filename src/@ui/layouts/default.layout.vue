<style scoped lang="scss">

  .layout {
    @apply h-full;
  }

</style>

<template>

  <div class="layout default-layout">
    <header class="">
      <router-link to="/">Home</router-link>
    </header>

    <router-view v-slot="{ Component, route }">
      <main :class="[route.name]">
        <component :is="Component" :class="[route.meta.classes]" />
      </main>
    </router-view>

  </div>

</template>

<script>
  export default {
    name: 'default.layout'
  }
</script>
