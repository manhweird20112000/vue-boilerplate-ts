import { createApp } from 'vue'


import 'element-plus/dist/index.css'
import '@/assets/styles/index.scss'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import i18n from '@/infra/i18n'
import routers from '@/infra/router'

const app = createApp(App)

app.use(routers)
app.use(i18n)
app.use(ElementPlus)
app.use(createPinia())

app.mount('#app')
