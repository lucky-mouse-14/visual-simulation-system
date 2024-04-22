<template>
  <div ref="refGraphPanel" class="w-full h-full relative graph-panel">
    <div id="graphContainer" />
    <GraphPanelToolbox class="absolute bottom-20px right-20px z-index-9" @zoom-in="handleZoomIn" @zoom-out="handleZoomOut" @center-content="handleCenterContent" />
  </div>
</template>
<script setup>
defineOptions({
  name: 'GraphPanel'
})

import { Graph } from '@antv/x6'
import GraphPanelToolbox from '../components/graph-panel-toolbox.vue'

const refGraphPanel = ref(null)
let _graphContainerWidth = 0
let _graphContainerHeight = 0
let _graph = null

onMounted(() => {
  const elGraphPanel = refGraphPanel.value.getBoundingClientRect()
  _graphContainerWidth = elGraphPanel._graphContainerWidth
  _graphContainerHeight = elGraphPanel._graphContainerHeight
  initGraph()
})

function initGraph() {
  _graph = new Graph({
    container: document.getElementById('graphContainer'),
    width: _graphContainerWidth,
    height: _graphContainerHeight,
    grid: {
      visible: true,
      size: 10,
      type: 'fixedDot',
      args: {
        color: '#000',
        thickness: 1,
      }
    },
    autoResize: true,
    background: {
      color: '#0f4d55', // 设置画布背景颜色
      size: '100% 100%'
    },
    panning: true,
    mousewheel: true,
    scaling: {
      min: 0.5, // 默认值为 0.01
      max: 2, // 默认值为 16
    },
  })
}

function handleZoomIn() {
  _graph && _graph.zoom(0.1)
}

function handleZoomOut() {
  _graph && _graph.zoom(-0.1)
}

function handleCenterContent() {
  _graph && _graph.centerContent()
}
</script>