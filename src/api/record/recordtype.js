import axios from 'axios'
import config from '../../config'

const record = config.gateway + config.service.record

export const selectListRecord = (params) => {
    return axios({
      method: 'post',
      url: record + `/recordType/selectList`,
      data: params
    })
}
export const selectListTenant = (params) => {
    return axios({
      method: 'post',
      url: record + `/recordType/selectListFeign`,
      data: params
    })
}