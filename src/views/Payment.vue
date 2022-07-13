<template>
  <div>
    寄送地址
    <PaymentStepper />
  </div>
</template>

<script>
import PaymentStepper from '../components/PaymentStepper';
export default {
  name: 'Payment',
  components: {
    PaymentStepper,
  }
}
</script>