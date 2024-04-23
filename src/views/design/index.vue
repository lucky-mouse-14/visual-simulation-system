<script setup>
import CompsPanel from './container/comps-panel.vue'
import GraphPanel from './container/graph-panel.vue'
</script>

<template>
  <div class="w-full h-full flex flex-row flex-nowrap">
    <CompsPanel class="grow-0 shrink-0" />
    <GraphPanel class="grow shrink" />
  </div>
</template>
