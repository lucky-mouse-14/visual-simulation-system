<script setup>
defineOptions({
  name: 'GraphPanelToolbox',
})

const emits = defineEmits(['zoomIn', 'zoomOut', 'centerContent', 'save', 'clear'])

function handleZoomIn() {
  emits('zoomIn')
}

function handleZoomOut() {
  emits('zoomOut')
}

function handleCenterContent() {
  emits('centerContent')
}

function handleSave() {
  emits('save')
}

function handleClear() {
  emits('clear')
}
</script>

<template>
  <div class="flex flex-col justify-center items-stretch">
    <div class="toolbox-btn" @click="handleZoomIn">
      画布放大
    </div>
    <div class="toolbox-btn" @click="handleZoomOut">
      画布缩小
    </div>
    <div class="toolbox-btn" @click="handleCenterContent">
      居中显示
    </div>
    <div class="toolbox-btn" @click="handleSave">
      保存
    </div>
    <div class="toolbox-btn" @click="handleClear">
      清空
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toolbox-btn {
  padding: 6px 12px;
  background-color: #fff;
  color: #666;
  border: 1px solid #666;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 4px;
  &:first-child {
    margin-top: 0;
  }
}
</style>
