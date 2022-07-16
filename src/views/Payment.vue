<template>
  <div class="payment-wrapper">
    <div>
      <PaymentStepper
        :currentStep="currentStep"
        :paymentSteps="paymentSteps"
        :isFormFinished="isFormFinished"
      />
      <h3 class="title">{{ paymentSteps[currentStep - 1].title }}</h3>
      <PaymentShippingAddressForm
        v-if="currentStep === 1"
        @handlePaymentFormSubmit="handlePaymentFormSubmit"
      />
      <PaymentShippingMethodsForm
        v-else-if="currentStep === 2"
        @addShppingFee="addShppingFee"
        @handlePaymentFormSubmit="handlePaymentFormSubmit"
      />
      <PaymentShippingInforForm
        v-else
        :isSubmitForm="isSubmitForm"
        @handlePaymentFormSubmit="handlePaymentFormSubmit"
      />
    </div>
    <PaymentActionButtonRow
      :initialCurrentStep="currentStep"
      :totalSteps="paymentSteps.length"
      @handleStepClick="handleStepClick"
      @handleSubmitForm="handleSubmitForm"
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
  props: {
    totalPrice: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      currentStep: 1,
      paymentSteps: paymentStepperConfig,
      paymentformData: {},
      isSubmitForm: false,
      isFormFinished: false,
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
        shippingFee,
      });
    },
    handlePaymentFormSubmit(payload) {
      const { paymentFormData, isFormFinished } = payload;
      const filteredKeys = Object.keys(paymentFormData).filter((key) => key);

      filteredKeys.forEach((key) => {
        this.paymentformData['totalPrice'] = this.totalPrice;
        this.paymentformData[key] = paymentFormData[key];
      });

      if (isFormFinished) {
        this.isFormFinished = isFormFinished;
        console.log('paymentformData', this.paymentformData);
      }
    },
    handleSubmitForm(payload) {
      const { isSubmitForm } = payload;
      this.isSubmitForm = isSubmitForm;
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
