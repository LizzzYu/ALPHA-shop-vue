<template>
  <form class="form-wrapper">
    <!-- <h3 class="title">{{ stepName }}</h3> -->
    <div class="form-content">
      <div class="form-content__group">
        <label class="form-content__group__title">稱謂</label>
        <div class="select-field">
          <select :class="{ disabled: title === -1 }" v-model="title">
            <option :value="-1" disabled>--請選擇--</option>
            <option>先生</option>
            <option>小姐</option>
          </select>
          <div class="select-field__icon"></div>
        </div>
      </div>
      <div class="form-content__group">
        <label class="form-content__group__title">姓名</label>
        <input placeholder="請輸入姓名" v-model="name" />
      </div>
      <div class="form-content__group">
        <label class="form-content__group__title">電話</label>
        <input placeholder="請輸入電話" v-model="phone" />
      </div>
      <div class="form-content__group">
        <label class="form-content__group__title">Email</label>
        <input placeholder="請輸入電子郵件" v-model="email" />
      </div>
      <div class="form-content__group">
        <label class="form-content__group__title">縣市</label>
        <div class="select-field">
          <select :class="{ disabled: city === -1 }" v-model="city">
            <option :value="-1" disabled>--請選擇--</option>
            <option>台北市</option>
            <option>高雄市</option>
          </select>
          <div class="select-field__icon"></div>
        </div>
      </div>
      <div class="form-content__group">
        <label class="form-content__group__title">地址</label>
        <input placeholder="請輸入地址" v-model="address" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PaymentShippingAddressForm',
  props: {
    stepName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: -1,
      name: '',
      phone: '',
      email: '',
      city: -1,
      address: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.form-content {
  padding-top: 24px;
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
