<template>
  <div id="app">
      <p>默认按钮</p>
    <dreamer-button>默认按钮</dreamer-button>
    <p>带有icon的按钮</p>
    <dreamer-button type="primary" icon="search">主要</dreamer-button>
    <p>不带文案，只有icon的按钮</p>
    <dreamer-button type="success" icon="search"></dreamer-button>
    <p>icon在右侧的按钮</p>
    <dreamer-button type="warning" icon="search" icon-position="right">警告</dreamer-button>
    <p></p>
    <dreamer-button type="info">消息</dreamer-button>
    <p></p>
    <dreamer-button type="danger">危险</dreamer-button>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">

</style>
