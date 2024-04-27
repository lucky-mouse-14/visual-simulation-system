import { defineStore } from 'pinia'

export const useToolboxStore = defineStore('toolbox', {
  state: () => ({
    currentToolbox: 'default', // default | line
    linePoints: [],
  }),
  actions: {
    setCurrentToolbox(str) {
      this.currentToolbox = str || 'default'
    },
    addLinePoint({ x, y }) {
      this.linePoints.push({ x, y })
    },
    cancelLine() {
      this.currentToolbox = 'default'
      this.linePoints = []
    }
  },
})
