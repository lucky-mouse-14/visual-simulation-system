import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    appLoading: false,
  }),
  actions: {
    setAppLoading(b) {
      this.appLoading = b
    },
  },
})
