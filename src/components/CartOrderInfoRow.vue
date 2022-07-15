<template>
  <div class="info-wrapper">
    <p class="info-wrapper__title">{{ title }}</p>
    <p class="info-wrapper__price">{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: 'CartOrderInfoRow',
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.info-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid $mid-gray;
  padding-top: 16px;

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  &__price {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
