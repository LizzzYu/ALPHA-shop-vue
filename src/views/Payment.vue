<template>
  <div class="payment-wrapper">
    <div>
      <PaymentStepper
        :currentStep="currentStep"
        :paymentSteps="paymentSteps"
        :isFormFinished="isFormFinished"
      />
      <h3 class="title">{{ paymentSteps[currentStep - 1].title }}</h3>
      <router-view
        :isSubmitForm="isSubmitForm"
        @addShippingFee="addShippingFee"
        @handlePaymentFormSubmit="handlePaymentFormSubmit"
      />
      <!-- <component
        :is="currentView"
        :isSubmitForm="isSubmitForm"
        @addShippingFee="addShippingFee"
        @handlePaymentFormSubmit="handlePaymentFormSubmit"
        /> -->
    </div>
    <PaymentActionButtonRow
      :initialCurrentStep="currentStep"
      :totalSteps="paymentSteps.length"
      @handleStepClick="handleStepClick"
      @handleSubmitForm="handleSubmitForm"
    />
    <Modal
      v-if="isModalShow"
      @closeModal="closeModal"
      :paymentFormData="paymentFormData"
    />
  </div>
</template>

<script>
import { paymentStepperConfig } from '../configs/paymentConfigs';
import PaymentStepper from '../components/PaymentStepper';
import PaymentActionButtonRow from '../components/PaymentActionButtonRow';
import Modal from '../components/Modal';

export default {
  name: 'Payment',
  components: {
    // 'ShippingAddressForm': PaymentShippingAddressForm,
    // 'ShippingMethodsForm': PaymentShippingMethodsForm,
    // 'ShippingInfoForm': PaymentShippingInfoForm,
    PaymentStepper,
    PaymentActionButtonRow,
    Modal,
  },
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentStep: 1,
      paymentSteps: paymentStepperConfig,
      paymentFormData: {},
      isSubmitForm: false,
      isFormFinished: false,
      isModalShow: false,
      shippingFee: 0,
    };
  },

  methods: {
    handleStepClick(payload) {
      const { currentStep } = payload;
      this.currentStep = currentStep;

      switch (this.currentStep) {
        case 1:
          this.$router.push('/main/shippingAddress');
          break;
        case 2:
          this.$router.push('/main/shippingMethods');
          break;
        case 3:
          this.$router.push('/main/shippingInfo');
          break;
      }
    },
    addShippingFee(payload) {
      const { shippingFee } = payload;
      this.shippingFee = shippingFee;
      this.$emit('addShippingFee', {
        shippingFee,
      });
    },
    handlePaymentFormSubmit(payload) {
      const { paymentFormData, isFormFinished } = payload;
      const filteredKeys = Object.keys(paymentFormData).filter((key) => key);

      filteredKeys.forEach((key) => {
        this.paymentFormData['totalPrice'] = this.totalPrice + this.shippingFee;
        this.paymentFormData[key] = paymentFormData[key];
      });

      if (isFormFinished) {
        this.isFormFinished = isFormFinished;
        this.isModalShow = true;
        console.log('paymentFormData', this.paymentFormData);
      }
    },
    handleSubmitForm(payload) {
      const { isSubmitForm } = payload;
      this.isSubmitForm = isSubmitForm;
    },
    closeModal(payload) {
      const { isModalShow } = payload;
      this.isModalShow = isModalShow;
      this.isFormFinished = false;
      this.isSubmitForm = false;
    },
  },
  computed: {
    currentView() {
      switch (this.currentStep) {
        case 1:
          return 'ShippingAddressForm';
        case 2:
          return 'ShippingMethodsForm';
        case 3:
          return 'ShippingInfoForm';
        default:
          return 'ShippingAddressForm';
      }
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
