<template>
  <div class="flex flex-row flex-nowrap justify-center items-center content-center toolbox-panel">
    <MenuBox v-for="item in toolboxBtns" :key="item.value" :name="item.name" :icon="item.icon" :checked="toolboxStore.currentToolbox === item.value" @click="item.callback" />
  </div>
</template>

<script setup>
import { useToolboxStore } from '@/store'
import MenuBox from '../../components/menu-box.vue'

defineOptions({
  name: 'ToolboxPanel'
}) 

const toolboxStore = useToolboxStore()

const toolboxBtns = ref([
  {
    name: '默认',
    value: 'default',
    icon: 'toolbox-arrow',
    callback: () => toolboxStore.currentToolbox = 'default',
  },
  {
    name: '线条',
    value: 'line',
    icon: 'toolbox-line',
    callback: () => toolboxStore.currentToolbox = 'line',
  },
])

</script>