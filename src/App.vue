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
// @import './scss/_variables.scss';
// @import './scss/_reset.scss';
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);

header,
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: $gray;
}

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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

.main-wrapper {
  max-width: $max-width;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 12fr;
}
</style>
