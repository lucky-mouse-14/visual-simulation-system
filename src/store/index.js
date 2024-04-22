import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function setupStore(app) {
  const pinia = createPinia()
  // pinia.use(piniaPluginPresistedstate)
  app.use(pinia)
}

export * from './modules'