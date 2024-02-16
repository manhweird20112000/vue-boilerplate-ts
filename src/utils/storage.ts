import Cookies from 'js-cookie'


export const setStorage = (key: string, value: string, options?: Cookies.CookieAttributes): void => {
  Cookies.set(key, value, options)
}

export const deleteStorage = (key: string, options?:  Cookies.CookieAttributes): void => {
  Cookies.remove(key, options)
}

export const getStorage = (key: string): string => {
  return Cookies.get(key) || ''
}
