<template>
   <svg class="dreamer-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
import '../styles/icon';
export default {
    name: 'dreamer-icon',
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.dreamer-icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>
