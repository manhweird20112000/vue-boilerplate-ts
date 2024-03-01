import { createApp } from 'vue'

import 'ant-design-vue/dist/reset.css'
import '@/assets/styles/index.scss'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import i18n from '@/infra/lang/i18n.ts'
import routers from '@/infra/router'

const app = createApp(App)

app.use(routers)
app.use(i18n)
app.use(Antd)
app.use(createPinia())

app.mount('#app')
