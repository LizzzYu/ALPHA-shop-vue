<template>
  <div class="radio-wrapper">
    <label
      v-for="option in paymentOptions"
      :class="['radio-option', { checked: option.name === shippingMethod }]"
      :key="option.id"
    >
      <div class="radio-option__left-column">
        <input
          type="radio"
          class="checkmark"
          :id="option.id"
          :value="option.name"
          v-model="shippingMethod"
          @change="handleShippingMethodChange(option.price)"
        />
        <div style="paddingleft: 50px">
          <p class="radio-option__left-column__title" for="one">
            {{ option.name }}
          </p>
          <p class="radio-option__left-column__description">
            {{ option.description }}
          </p>
        </div>
      </div>
      <p class="radio-option__price">{{ option.price }}</p>
    </label>
  </div>
</template>

<script>
import { paymentShippingMethods } from '../configs/paymentConfigs';
export default {
  name: 'PaymentShippingMethodsForm',
  data() {
    return {
      paymentOptions: paymentShippingMethods,
      shippingMethod: '',
    };
  },
  methods: {
    handleShippingMethodChange(price) {
      this.$emit('addShppingFee', {
        price
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.radio-wrapper {
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: 24px;

  justify-content: space-between;
  align-items: center;
}
.radio-option {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 11px 20px;
  border: 1px solid $light-gray;
  border-radius: 4px;

  &.checked {
    border: 1px solid $black;
  }

  &__left-column {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__title {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    &__description {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }

    .checkmark {
      width: 20px;
      height: 20px;
      margin-right: 20px;
      padding: 0;

      appearance: none;
      font: inherit;
      color: currentColor;
      border: 1px solid currentColor;
      border-radius: 50%;

      display: grid;
      place-content: center;

      &:checked {
        background-color: $black;
      }

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: $white;
      }

      &:checked::before {
        transform: scale(1);
        background-color: $white;
      }
    }
  }

  &__price {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
