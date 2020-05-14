<template>
    <button>
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
</style>
