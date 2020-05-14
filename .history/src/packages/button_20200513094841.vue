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
    
</style>
