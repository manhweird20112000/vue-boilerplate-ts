import type { AxiosResponse } from 'axios'

import service from '@/infra/service'


export const request = async (config: IHttpRequest): Promise<AxiosResponse> => {
  return await service(config)
}
