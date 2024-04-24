<script setup>
import CompsPanel from './container/comps-panel.vue'
import AttrsPanel from './container/attrs-panel.vue'
import GraphPanel from './container/graph-panel.vue'
</script>

<template>
  <div class="w-full h-full flex flex-row flex-nowrap">
    <CompsPanel class="grow-0 shrink-0 w-300px" />
    <GraphPanel class="flex-1" style="width: calc(100% - 600px);" />
    <AttrsPanel class="grow-0 shrink-0 w-300px" />
  </div>
</template>
