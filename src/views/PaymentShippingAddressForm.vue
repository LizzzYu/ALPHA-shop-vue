<template>
  <h3 class="title">{{ stepName }}</h3>
</template>

<script>
export default {
  name: 'PaymentShippingAddressForm',
  props: {
    stepName: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  padding-top: 64px;
}
</style>
