<template>
  <div class="payment-wrapper">
    <div>
      <PaymentStepper :currentStep="currentStep" :paymentSteps="paymentSteps" />
      <h3 class="title">{{ paymentSteps[currentStep - 1].title }}</h3>
      <PaymentShippingAddressForm v-if="currentStep === 1" />
      <PaymentShippingMethodsForm
        v-else-if="currentStep === 2"
        @addShppingFee="addShppingFee"
      />
      <PaymentShippingInforForm v-else />
    </div>
    <PaymentActionButtonRow
      :initialCurrentStep="currentStep"
      :totalSteps="paymentSteps.length"
      @handleStepClick="handleStepClick"
    />
  </div>
</template>

<script>
import { paymentStepperConfig } from '../configs/paymentConfigs';
import PaymentStepper from '../components/PaymentStepper';
import PaymentShippingAddressForm from './PaymentShippingAddressForm';
import PaymentShippingMethodsForm from './PaymentShippingMethodsForm';
import PaymentShippingInforForm from './PaymentShippingInfoForm';
import PaymentActionButtonRow from '../components/PaymentActionButtonRow';

export default {
  name: 'Payment',
  components: {
    PaymentStepper,
    PaymentShippingAddressForm,
    PaymentShippingMethodsForm,
    PaymentShippingInforForm,
    PaymentActionButtonRow,
  },
  data() {
    return {
      currentStep: 1,
      paymentSteps: paymentStepperConfig,
    };
  },
  methods: {
    handleStepClick(payload) {
      const { currentStep } = payload;
      this.currentStep = currentStep;
    },
    addShppingFee(payload) {
      const { shippingFee } = payload;
      this.$emit('addShippingFee', {
        shippingFee
      })
    },
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
  padding-bottom: 24px;
}
</style>
