import type { IHttpRequest } from '@/types/request'
import type { AxiosResponse } from 'axios'

import service from '@/infra/service.ts'

export const request = async (config: IHttpRequest): Promise<AxiosResponse> => {
  return await service(config)
}
