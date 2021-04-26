<style scoped lang="scss">

</style>

<template>
  <section>

    <div>
      Main view Modal
    </div>

    <modal>

      <template #activator="{ events }">
        <g-button @click="events.toggle" class="bg-red-500 p-12">Open modal now</g-button>
      </template>

      <h1 class="text-3xl font-medium text-green-700">
        Teleport from main view to body with counter {{ $store.$GET( 'two.counter' ) }}
      </h1>

      <g-calendar/>
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
