import axios from 'axios'
import config from '../../config'

const record = config.gateway + config.service.oauth

export const getTocken = (params) => {
    return axios({
      method: 'post',
      url: record + `oauth/token`,
      params: params
    })
}