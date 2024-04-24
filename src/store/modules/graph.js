import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'

export const useGraphStore = defineStore('graph', {
  state: () => ({
    cellsMetadata: [],
    currentNode: null,
  }),
  actions: {
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
