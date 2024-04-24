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
    <n-button type="primary" @click="handleZoomIn"><svg-icon icon="zoom-in" class="mr-4px" />画布放大</n-button>
    <n-button class="mt-4px" type="primary" @click="handleZoomOut"><svg-icon icon="zoom-out" class="mr-4px" /> 画布缩小</n-button>
    <n-button class="mt-4px" type="primary" @click="handleCenterContent"><svg-icon icon="focus-center" class="mr-4px" /> 居中显示</n-button>
    <n-button class="mt-4px" type="primary" @click="handleSave"><svg-icon icon="save" class="mr-4px" /> 保存</n-button>
    <n-button class="mt-4px" type="primary" @click="handleClear"><svg-icon icon="clear" class="mr-4px" /> 清空</n-button>
  </div>
</template>

