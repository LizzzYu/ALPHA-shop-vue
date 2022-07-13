<template>
  <div class="stepper-wrapper">
    <div class="step" v-for="step in steps" :key="step.id">
      <div
        :class="[
          'step__circle',
          {
            active: isFinished(step.id),
            disabled: currentStep !== step.id,
          },
        ]"
      >
        <span
          :class="[
            'step__number',
            {
              active: isFinished(step.id),
              disabled: currentStep !== step.id,
            },
          ]"
          >{{ isFinished(step.id) ? '&#10004;' : step.id }}</span
        >
      </div>
      <p
        :class="[
          'step__title',
          {
            disabled: !isFinished(step.id) && step.id !== currentStep,
          },
        ]"
      >
        {{ step.title }}
      </p>
      <div
        v-if="step.id !== totalSteps"
        :class="[
          'step__line',
          {
            disabled: !isFinished(step.id) && step.id !== currentStep,
          },
        ]"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentStepper',
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    paymentSteps: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      totalSteps: this.paymentSteps.length,
      steps: this.paymentSteps,
    };
  },
  methods: {
    isFinished(stepId) {
      return stepId < this.currentStep;
    }
  }
};
</script>

<style lang="scss" scoped>
.stepper-wrapper {
  padding-top: 48px;
  display: grid;
  // grid-template-columns: auto 1fr auto 1fr auto;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: 32px;

  .step {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__circle {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 1px solid $black;
      background-color: transparent;

      display: flex;
      align-items: center;
      justify-content: center;

      &.disabled {
        border: 1px solid $gray;
      }

      &.active {
        background-color: $black;
      }
    }

    &__number {
      color: $black;

      &.disabled {
        color: $gray;
      }

      &.active {
        color: $white;
      }
    }

    &__title {
      color: $black;
      margin-left: 8px;

      &.disabled {
        color: $gray;
      }
    }

    &__line {
      width: 60px;
      height: 1px;
      margin-left: 32px;

      background-color: $black;
      color: $black;

      &.disabled {
        background-color: $gray;
      }
    }
  }
}
</style>
