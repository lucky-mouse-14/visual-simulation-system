<template>
  <div class="config-panel">
    <n-collapse arrow-placement="right">
      <n-collapse-item title="组件属性" name="prop">
        <div>组件属性</div>
      </n-collapse-item>
      <n-collapse-item title="数据绑定" name="model">
        <div>数据绑定</div>
      </n-collapse-item>
      <n-collapse-item title="其它" name="3">
        <div>其它</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style lang="scss" scoped>
.config-panel {
  padding: 10px;
  border-left: 1px solid #000;
}
</style>
