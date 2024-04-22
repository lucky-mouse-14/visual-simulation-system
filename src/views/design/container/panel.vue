<template>
  <div class="w-full h-full panel">
    <div ref="refGraphContainer" id="graphContainer" />
  </div>
</template>
<script setup>
import G6 from '@antv/g6'

const refPanel = ref()
let graph = null

onMounted(() => {
  initGraph()
})

function initGraph() {
  graph = new G6.Graph
}
</script>