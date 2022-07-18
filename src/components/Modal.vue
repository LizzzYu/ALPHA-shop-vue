<template>
  <div class="modal">
    <div class="modal__content">
      <button @click.stop.prevent="closeModal" class="modal__cancel-btn">
        x
      </button>
      <div class="modal__title-row">
        <h4>訂單詳情</h4>
      </div>
      {{ paymentFormData }}
    </div>
    <div class="modal__background"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    paymentFormData: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.stopScroll();
  },
  methods: {
    stopScroll() {
      document.querySelector('body').style.overflow = 'hidden';
    },
    activeScroll() {
      document.querySelector('body').style.overflow = '';
    },
    closeModal() {
      this.$emit('closeModal', {
        isModalShow: false,
      });
    },
  },
  beforeDestroy() {
    this.activeScroll()
  }
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;

  &__title-row {
    height: 40px;
  }

  &__cancel-btn {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  &__content {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    min-height: calc(100% - (1.75rem * 2));
    margin: 1.75rem auto;

    width: 400px;
    height: 500px;
    background-color: $white;
    padding: 40px;
    border-radius: 4px;
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;
    width: 100vw;
    height: calc(100vh * 2);
    background-color: $black;
    opacity: 0.5;
  }
}
</style>
