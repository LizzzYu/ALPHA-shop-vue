<template>
  <div id="alpha-shop">
    <header>fake ALPHA shop header</header>
    <main class="main-wrapper">
      <h1 class="main-title">結帳</h1>
      <Payment />
    </main>
    <footer>fake footer</footer>
  </div>
</template>

<script>
import Payment from './views/Payment'
export default {
  name: 'App',
  components: {
    Payment,
  }
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
}

#alpha-shop {
  // font-family: 'Noto Sans TC', Avenir, Helvetica, Arial, sans-serif;
  // font-family: 'Noto Sans TC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-wrapper {
  max-width: $max-width;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
</style>
