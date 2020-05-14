<template>
   <div class="dreamer-button-group">
       <slot></slot>
   </div>
</template>

<script>
export default {
    name: 'dreamer-button-group',
    // 按钮组只能放按钮,这个需要校验
    mounted() {
        let children = this.$el.children;
        for (let i = 0; i < children.length; i++) {
            console.assert([children[i].tagName === 'BUTTON', '子元素必须为button')
        }
    }
}
</script>

<style>

</style>
