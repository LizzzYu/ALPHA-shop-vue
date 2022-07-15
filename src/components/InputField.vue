<template>
  <div class="form-content__group">
    <label class="title">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    }
  },
  methods: {
    onInput(event) {
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
</style>
