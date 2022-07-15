<template>
  <div class="product-card">
    <img :src="getImg(product.image)" />
    <div class="product-card__counter">
      <p>{{ product.name }}</p>
      <CartProductCounter />
    </div>
    <p class="product-card__price">${{ product.price.toLocaleString() }}</p>
  </div>
</template>

<script>
import CartProductCounter from './CartProductCounter'
export default {
  name: 'CartProductCard',
  props: {
    initialProduct: {
      type: Object,
      required: true,
    },
  },
  components: {
    CartProductCounter
  },
  data() {
    return {
      product: this.initialProduct,
      image: this.initialProduct.image,
    };
  },
  methods: {
    getImg(img) {
      return require(`../assets/${img}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: row;

  &__counter {
    padding-left: 20px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &__price {
    position: absolute;
    top: 0;
    right: 0;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
