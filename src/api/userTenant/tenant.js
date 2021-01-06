import axios from '../../libs/axios'
import config from '../../config'

const userTenant = config.service.userTenant

export const selectList = (params) => {
    return axios({
      method: 'post',
      url: userTenant + `/tenant/selectList`,
      data: params
    })
}