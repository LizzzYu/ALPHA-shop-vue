<template>
  <div class="payment-wrapper">
    <div>
      <PaymentStepper :currentStep="currentStep" :paymentSteps="paymentSteps" />
      <h3 class="title">{{ paymentSteps[currentStep - 1].title }}</h3>
      <PaymentShippingAddressForm
        :stepName="paymentSteps[currentStep - 1].title"
      />
    </div>
    <PaymentActionButtonRow :totalSteps="paymentSteps.length" />
  </div>
</template>

<script>
import { paymentStepperConfig } from '../configs/paymentConfigs';
import PaymentStepper from '../components/PaymentStepper';
import PaymentShippingAddressForm from './PaymentShippingAddressForm';
import PaymentActionButtonRow from '../components/PaymentActionButtonRow';

export default {
  name: 'Payment',
  components: {
    PaymentStepper,
    PaymentShippingAddressForm,
    PaymentActionButtonRow,
  },
  data() {
    return {
      currentStep: 1,
      paymentSteps: paymentStepperConfig,
    };
  },
};
</script>

<style lang="scss" scoped>
.payment-wrapper {
  grid-column: 1 / 7;
  min-height: 165px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;

  padding-top: 64px;
}
</style>
