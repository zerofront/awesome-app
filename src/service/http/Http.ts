import { IHttp } from './IHttp'
import { AxiosResponse } from 'axios'
import axios from 'axios'

const Http: IHttp = {
  async Post (url: string, params: any): Promise<boolean> {
    await axios.post(url, params)

    return true
  },

  /**
   * Get
   */
  async Get (url: string): Promise<any> {
    const axiosResponse: AxiosResponse = await axios.get(url)

    return axiosResponse.data
  }
}

export default Http
