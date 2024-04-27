<script setup>
defineOptions({
  name: "GraphPanel",
});

import { Graph } from "@antv/x6";
import { Dnd } from "@antv/x6-plugin-dnd";
import { Transform } from '@antv/x6-plugin-transform'
import { History } from '@antv/x6-plugin-history'
import GraphPanelToolbox from "../components/graph-panel-toolbox.vue";
import emitter from "@/utils/eventBus";
import { debounce } from '@/utils' 
import { useGraphStore, useToolboxStore } from '@/store'

const graphStore = useGraphStore()
const toolboxStore = useToolboxStore()

const refGraphPanel = ref(null);
let _graphContainerWidth = 0;
let _graphContainerHeight = 0;
// let _graph = null;
let _dnd = null;

onMounted(() => {
  initGraph();
  initTransform();
  initHistory();
  initDnd();
  initMetadata()

  emitter.on("on-drag-start", (data) => {
    onDragStart(data);
  });

  window.addEventListener("resize", resizeGraph, false);
});

onUnmounted(() => {
  if (graphStore.graph) {
    graphStore.graph.dispose()
    graphStore.graph = null
  }

  emitter.off("on-drag-start", (data) => {
    onDragStart(data);
  });

  window.removeEventListener("resize", resizeGraph, false)
});

/** 初始化画布 */
function initGraph() {
  const elGraphPanel = refGraphPanel.value.getBoundingClientRect();
  _graphContainerWidth = elGraphPanel.width;
  _graphContainerHeight = elGraphPanel.height;
  console.log('aaaa', _graphContainerHeight)

  const _graph = new Graph({
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
    autoResize: false,
    background: {
      color: "#0f4d55", // 设置画布背景颜色
      size: "100% 100%",
    },
    panning: {
      enabled: true,
      eventTypes: 'rightMouseDown'
    },
    mousewheel: true,
    scaling: {
      min: 0.5, // 默认值为 0.01
      max: 1, // 默认值为 16
    },
    connecting: {
      createEdge() {
        return this.createEdge({
          shape: 'edge',
          attrs: {
            line: {
              stroke: '#8f8f8f',
              strokeWidth: 1,
            },
          },
        })
      },
    },
  });

  // 初始化 chrome 插件
  window.__x6_instances__ = []
  window.__x6_instances__.push(_graph)

  // 事件监听
  _graph.on('blank:mousedown', ({e, x, y}) => onGraphBlankMousedown(e, x, y))
  _graph.on('edge:mouseenter', ({cell, edge}) => onEdgeMouseEnter(cell, edge))
  _graph.on('edge:mouseleave', ({cell, edge}) => onEdgeMouseLeave(cell, edge))

  // 设置 store
  graphStore.setGraph(_graph)
}

/** 初始化拖拽插件 */
function initDnd() {
  _dnd = new Dnd({
    target: graphStore.graph,
  });
}

/** 初始化图形转换插件 */
function initTransform() {
  graphStore.graph && graphStore.graph.use(new Transform({
    resizing: {
      enabled: true,
      // minWidth: 50,
      // minHeihgt: 50,
      orthogonal: false,
      restrict: false,
      preserveAspectRatio: true,
      allowReverse: false,
      minWidth(node) {
        const { width } = node.getData()
        return width
      },
      minHeight(node) {
        const { height } = node.getData()
        return height
      },
    },
    rotating: {
      enabled:true,
      grid: 10,
    }
  }))
}

/** 初始化撤销重做插件 */
function initHistory() {
  graphStore.graph && graphStore.graph.use(
    new History({
      enabled: true,
    })
  )
}

/** 初始元数据 */
function initMetadata() {
  if (graphStore.cellsMetadata && graphStore.cellsMetadata.length > 0) {
    graphStore.graph.fromJSON(graphStore.cellsMetadata)
  }
}

/** 重新调整画布大小 */
const resizeGraph = debounce(() => {
  const elGraphPanel = refGraphPanel.value.getBoundingClientRect();
  _graphContainerWidth = elGraphPanel.width;
  _graphContainerHeight = elGraphPanel.height;
  console.log('bbbb', _graphContainerWidth)

  // _graph && _graph.resize(_graphContainerWidth, _graphContainerHeight);
  graphStore.graph.resize(_graphContainerWidth, _graphContainerHeight);
}, 300, false)


/** 画布放大 */
function handleZoomIn() {
  graphStore.graph && graphStore.graph.zoom(0.1);
}

/** 画布缩小 */
function handleZoomOut() {
  graphStore.graph && graphStore.graph.zoom(-0.1);
}

/** 画布元素居中 */
function handleCenterContent() {
  graphStore.graph && graphStore.graph.centerContent();
}

/** 保存 */
function handleSave() {
  const graphJson = graphStore.graph.toJSON()
  console.log('graphJson', graphJson)
  graphStore.saveCellsMetadata(graphJson.cells)
}

/** 清空 */
function handleClear() {
  graphStore.clearCellsMetadata()
  graphStore.graph.clearCells()
}

/**
 * 组件拖拽开始
 * @param {object} mouseEvent - 鼠标事件
 * @param {object} nodeData - 节点数据
 */
function onDragStart({ mouseEvent, nodeData }) {
  const node = graphStore.graph.createNode({
    shape: "image",
    width: nodeData.width,
    height: nodeData.height,
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

/**
 * 鼠标在画板空白位置点下事件
 */
function onGraphBlankMousedown(e, x, y) {
  console.log('e, x, y', e, x, y)
  if (toolboxStore.currentToolbox === 'line') {
    if (toolboxStore.linePoints.length > 0) {
      const sourcePoint = toolboxStore.linePoints[0]
      graphStore.graph.addEdge({
        shape: 'edge',
        source: {x: sourcePoint.x, y: sourcePoint.y},
        target: {x, y},
        // vertices: [
        //   {x: sourcePoint.x, y: sourcePoint.y},
        //   {x, y},
        // ],
        attrs: {
          line: {
            stroke: '#ffffff',
            strokeDasharray: 5,
            targetMarker: 'classic',
            style: {
              animation: 'ant-line 30s infinite linear',
            },
          },
        },
        // tools: [
        //   {
        //     name: 'vertices',
        //     args: {
        //       attrs: { fill: '#666' },
        //     },
        //   },
        // ]
      })
      toolboxStore.cancelLine()
    }
    else {
      toolboxStore.addLinePoint({x, y})
    }
  }
}

/**
 * 鼠标移入边事件
 */
function onEdgeMouseEnter(cell, edge) {
  edge.addTools(['vertices', 'segments'])
}

/**
 * 鼠标移出边事件
 */
function onEdgeMouseLeave(cell, edge) {
  edge.removeTools()
}
</script>

<template>
  <div ref="refGraphPanel" class="relative graph-panel">
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
