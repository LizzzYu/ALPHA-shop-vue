<template>
  <div id="alpha-shop">
    <header>fake ALPHA shop header</header>
    <main class="main-wrapper">
      <h1 class="main-title">結帳</h1>
      <router-view
        :totalPrice="totalPrice"
        :paymentFormData="paymentFormData"
        @addShippingFee="addShippingFee"
      />
      <ShoppingCart
        :shippingFee="shippingFee"
        :paymentFormData="paymentFormData"
        @totalPriceChanged="totalPriceChanged"
      />
    </main>
    <footer>fake footer</footer>
  </div>
</template>

<script>
import ShoppingCart from './views/ShoppingCart';
import { getStorage } from './utils/localStorage';
const STORAGE_KEY = 'payment-data';

export default {
  name: 'App',
  components: {
    ShoppingCart,
  },
  data() {
    return {
      shippingFee: 0,
      totalPrice: 0,
      paymentFormData: {},
    };
  },
  created() {
    this.paymentFormData = getStorage(STORAGE_KEY);
  },
  methods: {
    addShippingFee(payload) {
      const { shippingFee } = payload;
      this.shippingFee = shippingFee;
    },
    totalPriceChanged(payload) {
      const { totalPrice } = payload;
      this.totalPrice = totalPrice;
    },
  },
};
</script>

<style lang="scss">
.main-title {
  font-family: 'Noto Sans TC';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  padding-top: 80px;
  padding-bottom: 48px;
}

#alpha-shop {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-wrapper {
  max-width: $max-width;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 124px;
}
</style>
