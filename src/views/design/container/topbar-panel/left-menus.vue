<template>
  <div class="flex flex-row flex-nowrap justify-start items-center">
    <template v-for="item in menus">
      <MenuBox v-if="!item.dropdownOptions" :key="item.key" :name="item.name" :icon="item.icon" @click="item.callback || undefined" />
      <n-dropdown v-else trigger="hover" placement="bottom-start" :options="item.dropdownOptions">
        <MenuBox :key="item.key" :name="item.name" :icon="item.icon" :dropdown="true" @click="item.callback || undefined" />
      </n-dropdown>
    </template>
    <!-- <MenuBox v-for="item in menus" :key="item.key" :name="item.name" :icon="item.icon" :dropdown="!!item.dropdown" @click="callback" /> -->
  </div>
</template>

<script setup>
import { useGraphStore } from '@/store'
import MenuBox from '../../components/menu-box.vue'

const graphStore = useGraphStore()

const menus = ref([
  {
    name: '文件',
    value: 'folder',
    icon: 'menu-folder',
    // callback: () => $message.info('文件'),
    dropdownOptions: [
      {
        label: '保存',
        key: 'save'
      },
      {
        type: 'divider',
      },
      {
        label: '导入JSON文件',
        key: 'importJsonFile'
      },
      {
        type: 'divider',
      },
      {
        label: '下载为PNG',
        key: "exportPNG"
      },
      {
        label: '下载为JPEG',
        key: "exportPNG"
      },
      {
        label: '下载为SVG',
        key: 'exportSVG'
      },
      {
        type: 'divider',
      },
      {
        label: '导出JSON文件',
        key: 'exportJsonFile'
      },
      {
        label: '导出ZIP文件',
        key: 'exporZIP'
      },
    ],
  },
  {
    name: '编辑',
    value: 'edit',
    icon: 'menu-edit',
    // callback: () => $message.info('编辑'),
    dropdownOptions: [
      {
        label: '撤销',
        key: 'undo',
        disabled: graphStore.graph && !graphStore.graph.canUndo()
      },
      {
        label: '重做',
        key: 'redo',
        disabled: graphStore.graph && !graphStore.graph.canRedo()
      },
      // {
      //   type: 'divider',
      // },
    ],
  },
  {
    name: '保存',
    value: 'save',
    icon: 'menu-save',
    callback: () => $message.info('保存'),
  },
])
</script>