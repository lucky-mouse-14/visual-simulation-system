import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'

export const useGraphStore = defineStore('graph', {
  state: () => ({
    graph: null,
    cellsMetadata: [],
    currentNode: null,
  }),
  actions: {
    setGraph(graph) {
      this.graph = graph
    },

    saveCellsMetadata(arr) {
      this.cellsMetadata = cloneDeep(arr)
    },
    clearCellsMetadata() {
      this.cellsMetadata = []
    },
  },
  persist: {
    paths: [
      'cellsMetadata'
    ],
    storage: sessionStorage,
  },
})
