<script setup>
import CompsPanel from './container/comps-panel.vue'
import ConfigPanel from './container/config-panel.vue'
import TopbarPanel from './container/topbar-panel/topbar-panel.vue'
import GraphPanel from './container/graph-panel.vue'
</script>

<template>
  <div class="w-full h-full flex flex-col flex-nowrap justify-start items-stretch">
    <TopbarPanel />
    <div class="w-full flex-1 flex flex-row flex-nowrap justify-start items-stretch" style="height: calc(100% - 46px);">
      <CompsPanel class="grow-0 shrink-0 w-300px" />
      <GraphPanel class="flex-1" style="width: calc(100% - 600px);" />
      <ConfigPanel class="grow-0 shrink-0 w-300px" />
    </div>
  </div>
</template>
