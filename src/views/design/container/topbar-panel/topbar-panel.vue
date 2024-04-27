<template>
  <div class="flex flex-row justify-between items-stretch topbar-panel">
    <LeftMenus />
    <ToolboxPanel />
    <RightMenus />
  </div>
</template>

<script setup>
import ToolboxPanel from './toolbox-panel.vue'
import LeftMenus from './left-menus.vue'
import RightMenus from './right-menus.vue'

defineOptions({
  name: 'TopbarPanel'
})
</script>

<style lang="scss" scoped>
.topbar-panel {
  height: 46px;
  // border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 0 4px;
  box-shadow: 0 2px 4px #dad7d7;
  z-index: 9;
}
</style> 