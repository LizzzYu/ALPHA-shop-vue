<template>
  <div class="counter-wrapper">
    <button
      @click.stop.prevent="minusCount"
      :disabled="count === 0"
      class="counter-wrapper__btn"
    >
      －
    </button>
    <p class="counter-wrapper__text">{{ count }}</p>
    <button @click.stop.prevent="addCount" class="counter-wrapper__btn">
      ＋
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartProductCounter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count = this.count + 1;
      this.$emit('onCountClick', {
        count: this.count
      })
    },
    minusCount() {
      this.count = this.count - 1;
      this.$emit('onCountClick', {
        count: this.count
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.counter-wrapper {
  width: 116px;
  padding-top: 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__btn {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: $mid-gray;
    font-weight: 700;
    user-select: none;
  }

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
