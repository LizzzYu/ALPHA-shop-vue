<template>
  <div class="buttons-wrapper">
    <button class="btn prev-button" v-if="currentStep !== 1">← 上一步</button>
    <div v-else></div>
    <button class="btn next-button">
      {{ currentStep !== totalSteps ? '下一步 →' : '確認下單' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaymentActionButtonRow',
  props: {
    totalSteps: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentStep: 2,
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  border-top: 1px solid $gray;
  padding-top: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.btn {
  height: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.next-button {
  width: 174px;
  background-color: $pink;
  border-radius: 4px;
  color: $white;
}
</style>
