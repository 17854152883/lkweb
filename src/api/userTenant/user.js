import axios from 'axios'
import config from '../../config'

const userTenant = config.gateway + config.service.userTenant

export const hello = (params) => {
    return axios({
      method: 'post',
      url: userTenant + `/user/hello`,
      data: params
    })
}