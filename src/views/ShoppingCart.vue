<template>
  <div class="cart-wrapper">
    <h4 class="cart-wrapper__title">購物車</h4>
    <div class="cart-wrapper__container">
      <CartProductCard
        v-for="product in products"
        :key="product.id"
        :initialProduct="product"
        @onCountClick="onCountClick"
      />
    </div>
    <div class="cart-wrapper__info">
      <CartOrderInfoRow :title="'運費'" :price="getFee(shippingFee)" />
      <CartOrderInfoRow
        :title="'小計'"
        :price="'$' + (totalPrice + shippingFee).toLocaleString()"
      />
    </div>
  </div>
</template>

<script>
import { productsList } from '../configs/cartConfigs';
import CartProductCard from '../components/CartProductCard';
import CartOrderInfoRow from '../components/CartOrderInfoRow';

export default {
  name: 'ShoppingCart',
  components: {
    CartProductCard,
    CartOrderInfoRow,
  },
  props: {
    shippingFee: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      products: productsList,
      totalPrice: 0,
    };
  },
  methods: {
    onCountClick(payload) {
      const { price } = payload;
      this.totalPrice += price;
      this.$emit('totalPriceChanged', {
        totalPrice: this.totalPrice
      })
    },
    getFee(fee) {
      if (fee === 0) {
        return '免費'
      } else {
        return `$${fee}`
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.cart-wrapper {
  border: 1px solid $mid-gray;
  grid-column: 8 / 13;
  min-height: 490px;
  padding: 32px 24px;
  border-radius: 4px;

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }

  &__container {
    padding: 34px 0;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    row-gap: 34px;
  }

  &__info {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    row-gap: 32px;
  }
}
</style>
