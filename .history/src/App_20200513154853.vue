<template>
    <div id="app">
        <!-- 默认按钮 -->
        <zh-button>默认按钮</zh-button>
        <br />
        <!-- 带类型的按钮 -->
        <zh-button type="primary">主要按钮</zh-button>
        <zh-button type="warning">警告按钮</zh-button>
        <zh-button type="danger">危险按钮</zh-button>
        <zh-button type="success">成功按钮</zh-button>
        <zh-button type="info">信息按钮</zh-button>
        <br />
        <!-- 带icon的按钮 -->
        <zh-button type="info" icon="sousuo">信息按钮</zh-button>
        <zh-button type="primary" icon="sousuo"></zh-button>
        <zh-button type="success" icon="sousuo" icon-position="right">内容</zh-button>
        <br />
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
</style>
