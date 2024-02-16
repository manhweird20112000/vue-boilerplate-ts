import { createApp } from 'vue'

import '@/assets/styles/index.scss'
import { createPinia } from 'pinia'
import '@/infra/request.ts'

import App from '@/App.vue'
import routers from '@/infra/router.ts'

const app = createApp(App)

app.use(routers)
app.use(createPinia())

app.mount('#app')
