<template>
  <form class="form-wrapper">
    <div class="form-content">
      <!-- TODO: costomize select compoent -->
      <div class="form-content__group">
        <label class="form-content__group__title">稱謂</label>
        <div class="select-field">
          <select :class="{ disabled: salutation === '' }" v-model="salutation">
            <option value="" disabled selected>--請選擇--</option>
            <option>先生</option>
            <option>小姐</option>
          </select>
          <div class="select-field__icon"></div>
        </div>
      </div>
      <!-- <SelectField v-model="title" :label="'稱謂'" /> -->
      <InputField :placeholder="'請輸入姓名'" :label="'姓名'" v-model="name" />
      <InputField :placeholder="'請輸入電話'" :label="'電話'" v-model="phone" />
      <InputField :placeholder="'請輸入電子郵件'" :label="'Email'" v-model="email" />
      <div class="form-content__group">
        <label class="form-content__group__title">縣市</label>
        <div class="select-field">
          <select :class="{ disabled: city === '' }" v-model="city">
            <option value="" disabled selected>--請選擇--</option>
            <option>台北市</option>
            <option>高雄市</option>
          </select>
          <div class="select-field__icon"></div>
        </div>
      </div>
      <InputField :placeholder="'請輸入地址'" :label="'地址'" v-model="address" />
    </div>
  </form>
</template>

<script>
import InputField from '../components/InputField';
// import SelectField from '../components/SelectField';

export default {
  name: 'PaymentShippingAddressForm',
  components: {
    InputField,
    // SelectField,
  },
  data() {
    return {
      salutation: '',
      name: '',
      phone: '',
      email: '',
      city: '',
      address: '',
    };
  },
  beforeDestroy() {
    this.$emit('handlePaymentFormSubmit', {
      paymentFormData: {
        salutation: this.salutation,
        name: this.name,
        phone: this.phone,
        email: this.email,
        city: this.city,
        address: this.address,
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.form-content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 30px;
  row-gap: 24px;

  &__group {
    .select-field {
      position: relative;

      &__icon {
        position: absolute;
        right: 15px;
        bottom: 15px;

        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid $dark-gray;
      }

      > select {
        appearance: none;
        position: relative;

        &.disabled {
          color: $gray;
        }

        > option {
          &:disabled {
            color: red;
          }
        }
      }
    }

    &:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }

    &:nth-child(2) {
      grid-column: 3 / 7;
      grid-row: 1 / 2;
    }

    &:nth-child(3) {
      grid-column: 1 / 4;
      grid-row: 2 / 3;
    }

    &:nth-child(4) {
      grid-column: 4 / 7;
      grid-row: 2 / 3;
    }

    &:nth-child(5) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }

    &:nth-child(6) {
      grid-column: 3 / 7;
      grid-row: 3 / 4;
    }

    &__title {
      @extend %formTitle;
      margin-bottom: 8px;
      display: inline-block;
    }
  }
}
</style>
