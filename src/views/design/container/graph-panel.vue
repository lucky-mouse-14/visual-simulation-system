<script setup>
defineOptions({
  name: "GraphPanel",
});

import { Graph } from "@antv/x6";
import { Dnd } from "@antv/x6-plugin-dnd";
import GraphPanelToolbox from "../components/graph-panel-toolbox.vue";
import emitter from "@/utils/eventBus";
import { useGraphStore } from '@/store'

const graphStore = useGraphStore()

const refGraphPanel = ref(null);
let _graphContainerWidth = 0;
let _graphContainerHeight = 0;
let _graph = null;
let _dnd = null;

onMounted(() => {
  emitter.on("on-drag-start", (data) => {
    onDragStart(data);
  });

  const elGraphPanel = refGraphPanel.value.getBoundingClientRect();
  _graphContainerWidth = elGraphPanel._graphContainerWidth;
  _graphContainerHeight = elGraphPanel._graphContainerHeight;
  initGraph();
  initDnd();
  initMetadata()
});

onUnmounted(() => {
  emitter.off("on-drag-start", (data) => {
    onDragStart(data);
  });
});

function initGraph() {
  _graph = new Graph({
    container: document.getElementById("graphContainer"),
    width: _graphContainerWidth,
    height: _graphContainerHeight,
    grid: {
      visible: true,
      size: 10,
      type: "fixedDot",
      args: {
        color: "#000",
        thickness: 1,
      },
    },
    autoResize: true,
    background: {
      color: "#0f4d55", // 设置画布背景颜色
      size: "100% 100%",
    },
    panning: true,
    mousewheel: true,
    scaling: {
      min: 0.5, // 默认值为 0.01
      max: 1, // 默认值为 16
    },
    connecting: {
      snap: true,
    },
  });
}

function initDnd() {
  _dnd = new Dnd({
    target: _graph,
  });
}

function initMetadata() {
  if (graphStore.cellsMetadata && graphStore.cellsMetadata.length > 0) {
    _graph.fromJSON(graphStore.cellsMetadata)
  }
}

/** 画布放大 */
function handleZoomIn() {
  _graph && _graph.zoom(0.1);
}

/** 画布缩小 */
function handleZoomOut() {
  _graph && _graph.zoom(-0.1);
}

/** 画布元素居中 */
function handleCenterContent() {
  _graph && _graph.centerContent();
}

/** 保存 */
function handleSave() {
  const graphJson = _graph.toJSON()
  console.log('graphJson', graphJson)
  graphStore.saveCellsMetadata(graphJson.cells)
}

/** 清空 */
function handleClear() {
  graphStore.clearCellsMetadata()
  _graph.clearCells()
}

/**
 * 组件拖拽开始
 * @param {object} mouseEvent - 鼠标事件
 * @param {object} nodeData - 节点数据
 */
function onDragStart({ mouseEvent, nodeData }) {
  const node = _graph.createNode({
    shape: "image",
    width: 100,
    height: 100,
    // label: nodeData.name,
    imageUrl: nodeData.icon,
    tools: [
      {
        name: 'boundary',
        args: {
          padding: 5,
        },
      },
    ],
    data: nodeData,
  });

  _dnd.start(node, mouseEvent);
}
</script>

<template>
  <div ref="refGraphPanel" class="w-full h-full relative graph-panel">
    <div id="graphContainer" />
    <GraphPanelToolbox
      class="absolute bottom-20px right-20px z-index-9"
      @zoom-in="handleZoomIn"
      @zoom-out="handleZoomOut"
      @center-content="handleCenterContent"
      @save="handleSave"
      @clear="handleClear"
    />
  </div>
</template>
