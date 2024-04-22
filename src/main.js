import '@/styles/reset.css'
import '@/styles/global.scss'
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupNaiveDiscreteApi } from './utils'

async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  setupNaiveDiscreteApi(app)
  await setupRouter(app)
  app.mount('#app')
}


bootstrap()