<template>
  <div class="form-content__group">
    <label class="title">{{ label }}</label>
    <div class="select-field">
      <select
        :class="{ disabled: value === '' }"
        :value="value"
        @select="onSelect"
      >
        <option value="-1" disabled>--請選擇--</option>
        <option value="'先生'">先生</option>
        <option value="'小姐'">小姐</option>
      </select>
      <div class="select-field__icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    // placeholder: {
    //   type: String,
    //   required: true,
    // },
  },
  methods: {
    onSelect(event) {
      console.log(event)
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  @extend %formTitle;
  margin-bottom: 8px;
  display: inline-block;
}

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
</style>
