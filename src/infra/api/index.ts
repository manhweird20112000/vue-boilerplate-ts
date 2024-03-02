import type { AxiosResponse } from 'axios'

import service from '@/infra/api/service.ts'


export const request = async (config: IHttpRequest): Promise<AxiosResponse> => {
  return await service(config)
}
