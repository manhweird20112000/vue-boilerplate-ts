import { createI18n } from 'vue-i18n'

import jp from '@/lang/jp.ts'

const i18n = createI18n({
  fallbackLocale: 'jp',
  locale: 'jp',
  legacy: false,
  allowComposition: true,
  messages: {
    jp
  }
})

export default i18n
