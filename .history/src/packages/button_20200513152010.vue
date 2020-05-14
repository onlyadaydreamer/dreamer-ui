<template>
    <button class="dreamer-button" :class="btnClass">
        <dreamer-icon v-if="icon" :icon="icon" :class="icon"></dreamer-icon>
        <span v-if="this.$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'dreamer-button',
    props: {
        type: {
            type: String,
            default: '',
            validator(type) {
                if (type && !['primary', 'success', 'warning', 'info', 'danger'].includes(type)) {
                    console.error('type类型必须为' + ['primary', 'success', 'warning', 'info', 'danger'].join('、'));
                }
                return true;
            }
        },
        icon: {
            type: String
        }
    },
    computed: {
        btnClass() {
            let classes = [];
            if (this.type) {
                classes.push(`dreamer-button-${this.type}`);
            }
            return classes;
        }
    }
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
//   &-primary {}
//   &-success {} 
//    ... 这么一遍一遍写太麻烦
@each $type, $color in (primary: $primary, success: $success, info: $info, warning: $warning, danger: $danger) {
    &-#{$type} {
        background: #{$color};
        border: 1px solid #{$color};
        color: #fff;
    }
} 
@each $type, $color in (primary: $primary-hover, success: $success-hover, info: $info-hover, warning: $warning-hover, danger: $danger-hover) {
    &-#{$type}:hover {
        background: #{$color};
        border: 1px solid #{$color};
        color: #fff;
    }
} 
@each $type, $color in (primary: $primary-active, success: $success-active, info: $info-active, warning: $warning-active, danger: $danger-active) {
    &-#{$type}:active,&-#{$type}:focus {
        background: #{$color};
        border: 1px solid #{$color};
        color: #fff;
    }
} 
.icon {
    width: 16px;
    height: 16px;
}
}
</style>
