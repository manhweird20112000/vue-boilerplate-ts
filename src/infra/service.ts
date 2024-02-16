import axios from 'axios'

import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

service.interceptors.request.use(
  (config: any) => {
    const token: string = ''
    if (token !== '') {
      config.headers.Authorization = 'Bearer ' + token
    }

    config.responseType = (config.isDownloadFile != null) ? 'blob' : 'json'
    config.headers['Content-Type'] = (config.isUploadFile != null) ? 'multipart/form-data' : 'application/json'

    if (config.method === 'GET') {
      config.params = config.payload
    } else {
      config.data = config.payload
    }

    return config
  },
  (error: AxiosError) => {
    throw error
  })

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError) => {
    throw error
  }
)

export default service
