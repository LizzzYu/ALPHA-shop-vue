<template>
  <div class="buttons-wrapper">
    <button>上一步</button>
    <button>下一步</button>
  </div>
</template>

<script>
export default {
  name: 'PaymentActionButtonRow',
}
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  border-top: 1px solid $gray;
  padding-top: 24px;
}
</style>