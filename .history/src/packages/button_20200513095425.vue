<template>
    <button class="dreamer-button">
        <span v-if="this.$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'dreamer-button'
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;

.dreamer-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: 42px;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
      border-color: $border-color;
      background-color: $background; 
  }
  &:focus, &:active {
      color: $active-color;
      border: 1px solid $active-color;
      outline: none;
      background-color: $background;
  }
}
</style>
