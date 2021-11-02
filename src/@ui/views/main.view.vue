<style scoped lang="scss">

</style>

<template>
  <section>
    Main view Modal

    <modal>
      <h1 class="text-3xl font-medium text-green-700">
        Teleport from main view to body with counter
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
