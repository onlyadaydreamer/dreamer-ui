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
        <dreamer-button type="info" icon="search">信息按钮</dreamer-button>
        <dreamer-button type="primary" icon="search"></dreamer-button>
        <dreamer-button type="success" icon="search" icon-position="right">内容</dreamer-button>
        <!-- loading按钮 -->
        <dreamer-button type="success" icon="loading" :loading="true">加载中</dreamer-button>
        <br />
        <!-- 触发事件 -->
        <dreamer-button type="success" @click="fn">触发事件</dreamer-button>
        <!-- 分组按钮 -->
        <dreamer-button-group>
            <dreamer-button type="primary" icon="left" icon-position="left">上一页</dreamer-button>
            <dreamer-button type="primary" icon="right" icon-position="right">下一页</dreamer-button>
        </dreamer-button-group>
    </div>
</template>

<script>

export default {
    name: 'app',
    methods: {
        fn() {
            alert('click');
        }
    }
}
</script>

<style lang="scss">
</style>
