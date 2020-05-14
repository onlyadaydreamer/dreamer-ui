<template>
    <div id="app">
        <!-- 默认按钮 -->
        <dreamer-button>默认按钮</dreamer-button>
        <br />
        <!-- 带类型的按钮 -->
        <dreamer-button type="primary">主要按钮</dreamer-button>
        <dreamer-button type="warning">警告按钮</dreamer-button>
        <dreamer-button type="danger">危险按钮</dreamer-button>
        <dreamer-button type="success">成功按钮</dreamer-button>
        <dreamer-button type="info">信息按钮</dreamer-button>
        <br />
        <!-- 带icon的按钮 -->
        <dreamer-button type="info" icon="sousuo">信息按钮</dreamer-button>
        <dreamer-button type="primary" icon="sousuo"></dreamer-button>
        <dreamer-button type="success" icon="sousuo" icon-position="right">内容</dreamer-button>
        <br />
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
</style>
