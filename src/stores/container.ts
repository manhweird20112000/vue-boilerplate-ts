import { defineStore } from 'pinia'

export const useContainer = defineStore('container', {
  state: () => ({
    loading: false
  }),
  actions: {
    setLoading (data: boolean): void {
      this.loading = data
    }
  }
})
