<style scoped lang="scss">

</style>

<template>

  <section>

    <div>

      <g-calendar :inline="true"/>

    </div>

    <modal>

      <template #activator="{ events }">
        <g-button @click="events.toggle">Open  now 1111</g-button>
      </template>

      <h1 class="text-3xl font-medium text-green-700">
        Teleport from main view to body with counter {{ $store.$GET( 'two.counter' ) + 1000 }}
      </h1>
    </modal>

  </section>
</template>

<script>
  import Modal from '@ui/components/modal.vue'

  export default {
    name:       'main.view',
    components: { Modal }
  }
</script>
