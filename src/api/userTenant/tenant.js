import axios from 'axios'
import config from '../../config'

const userTenant = config.gateway + config.service.userTenant

export const selectList = (params) => {
    return axios({
      method: 'post',
      url: userTenant + `/tenant/selectList`,
      data: params
    })
}