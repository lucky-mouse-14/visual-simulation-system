import '@/styles/reset.css'
import '@/styles/global.scss'
import 'uno.css'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import { setupNaiveDiscreteApi } from './utils'
import { setupGlobalComponents } from './components'

async function bootstrap() {
  const app = createApp(App)
  // 挂载数据仓库
  setupStore(app)
  // 挂载全局组件
  setupGlobalComponents(app)
  // 挂在路由
  await setupRouter(app)
  app.mount('#app')
  // 挂载 Naive 全局 API
  setupNaiveDiscreteApi()
}

bootstrap()
