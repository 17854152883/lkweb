import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 50000
})

axios.defaults.baseURL = 'http://localhost:7788';
// 请求拦截
axios.interceptors.request.use(
    (confing) => {
        //设置请求头
        if (localStorage.getItem("token")) {
            confing.headers.Authorization = "Bearer " + localStorage.getItem("token")
        }
        return confing
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axios