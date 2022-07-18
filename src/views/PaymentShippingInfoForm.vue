<template>
  <div class="form-content">
    <InputField
      class="form-content__group"
      :placeholder="'John Doe'"
      v-model="cardOwnerName"
      :label="'持卡人姓名'"
    />
    <InputField
      class="form-content__group"
      :placeholder="'1111 2222 3333 4444'"
      v-model="cardNumber"
      :label="'卡號'"
    />
    <InputField
      class="form-content__group"
      :placeholder="'MM/YY'"
      v-model="validityPeriod"
      :label="'有效期限'"
    />
    <InputField
      class="form-content__group"
      :placeholder="'123'"
      v-model="cvc_ccv"
      :label="'CVC / CCV'"
    />
  </div>
</template>

<script>
import InputField from '../components/InputField';
export default {
  name: 'PaymentShippingInfoForm',
  components: {
    InputField,
  },
  props: {
    isSubmitForm: {
      type: Boolean,
      required: true,
    },
    paymentFormData: Object,
  },
  data() {
    return {
      cardOwnerName: this.paymentFormData.cardOwnerName || '',
      cardNumber: this.paymentFormData.cardNumber || '',
      validityPeriod: this.paymentFormData.validityPeriod || '',
      cvc_ccv: this.paymentFormData.cvc_ccv || '',
    };
  },
  methods: {
  },
  watch: {
    isSubmitForm: function () {
      if (this.isSubmitForm) {
        this.$emit('handlePaymentFormSubmit', {
          paymentFormData: {
            cardOwnerName: this.cardOwnerName,
            cardNumber: this.cardNumber,
            validityPeriod: this.validityPeriod,
            cvc_ccv: this.cvc_ccv,
          },
          isFormFinished: true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 30px;
  row-gap: 24px;

  &__group {
    &:nth-child(1) {
      grid-column: 1 / 5;
      grid-row: 1 / 2;
    }

    &:nth-child(2) {
      grid-column: 1 / 5;
      grid-row: 2 / 3;
    }

    &:nth-child(3) {
      grid-column: 1 / 4;
      grid-row: 3 / 4;
    }

    &:nth-child(4) {
      grid-column: 4 / 7;
      grid-row: 3 / 4;
    }
  }
}
</style>
