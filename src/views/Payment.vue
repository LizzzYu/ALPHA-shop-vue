<template>
  <div class="payment-wrapper">
    <PaymentStepper />
  </div>
</template>

<script>
import PaymentStepper from '../components/PaymentStepper';
export default {
  name: 'Payment',
  components: {
    PaymentStepper,
  },
};
</script>

<style lang="scss" scoped>
// h3 {
//   font-family: 'Noto Sans TC';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 24px;
//   line-height: 24px;
// }

.payment-wrapper {
  grid-column: 1 / 7;
}
</style>
