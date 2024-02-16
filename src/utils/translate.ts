import { useI18n } from 'vue-i18n'

export const translate = (key: string, params?: any[]) => {
  const i18n = useI18n()
  if (!params) { return i18n.t(key) }
  return i18n.t(key, params)
}
