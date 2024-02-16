declare interface IHttpRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATH'
  url: string
  isUploadFile?: string
  isDownloadFile?: string
  isLoading?: boolean
  isThrowError?: boolean
  isNotify?: boolean
  payload?: never
}

