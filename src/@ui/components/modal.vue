<style scoped lang="scss">

.modal {
  @apply absolute w-screen h-screen bg-blue-500 top-0 left-0;
}

</style>

<template>

  <slot name="activator" :events="{ toggle }">
    <g-button title="Hello" @click="modal = true">Open modal</g-button>
  </slot>

  <teleport to="body">
    <div v-if="modal" class="modal">
      <slot></slot>
      <button @click="modal = false">Close</button>
    </div>
  </teleport>

</template>

<script>
export default {
  name: 'modal',
  data() {
    return {
      modal: false
    }
  },
  methods: {
    toggle() {
      this.modal = !this.modal
    }
  },
}
</script>
