<template>
  <div class="payment-wrapper">
    <PaymentStepper :currentStep="currentStep" :paymentSteps="paymentSteps" />
    <PaymentShippingAddressForm
      :stepName="paymentSteps[currentStep - 1].title"
    />
    <PaymentActionButtonRow />
  </div>
</template>

<script>
import { paymentStepperConfig } from '../configs/paymentConfigs';
import PaymentStepper from '../components/PaymentStepper';
import PaymentShippingAddressForm from './PaymentShippingAddressForm';
import PaymentActionButtonRow from '../components/PaymentActionButtonRow'

export default {
  name: 'Payment',
  components: {
    PaymentStepper,
    PaymentShippingAddressForm,
    PaymentActionButtonRow,
  },
  data() {
    return {
      currentStep: 2,
      paymentSteps: paymentStepperConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
.payment-wrapper {
  grid-column: 1 / 7;
}
</style>
