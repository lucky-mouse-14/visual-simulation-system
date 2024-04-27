<template>
  <div class="flex flex-row flex-nowrap justify-start items-center">
    <MenuBox v-for="item in menus" :key="item.key" :name="item.name" :icon="item.icon" @click="item.callback" />
  </div>
</template>

<script setup>
import MenuBox from '../../components/menu-box.vue'

const menus = ref([
  {
    name: '锁定',
    value: 'lock',
    icon: 'menu-lock',
    callback: () => $message.info('锁定'),
  },
  {
    name: '预览',
    value: 'preview',
    icon: 'menu-run',
    callback: () => $message.info('预览'),
  },
  {
    name: '云上传',
    value: 'upload',
    icon: 'menu-upload',
    callback: () => $message.info('云上传'),
  },
])
</script>