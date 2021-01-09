import axios from 'axios'
import router from '../router'

// const instance = axios.create({
//     baseURL: process.env.BASE_API,
//     timeout: 50000
// })

axios.defaults.baseURL = 'http://localhost:7788';
axios.defaults.timeout = 50000;
// 请求拦截
axios.interceptors.request.use(
    (config) => {
        //设置请求头
        if (localStorage.getItem("token")) {
            config.headers.Authorization = "Bearer " + localStorage.getItem("token")
        }
        return config
    },
    (error) => {
        toLogin(error)
    }
)

axios.interceptors.response.use(
    (response) => {
        if (response.data) {
        const result = response.data
        //   response.success = result.success
        //   response.exception = result.exception
        //   response.msg = result.msg
          response.value = result.data
        }
        return response
    },
    (error) => {
        toLogin(error)
    }
)

const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
    // 401: 未登录状态，跳转登录页   
        case 401:
        toLogin();
        break;
    // 403 token过期
    // 清除token并跳转登录页
        case 403:
        tip('登录过期，请重新登录');
        localStorage.removeItem('token');
        store.commit('loginSuccess', null);
        setTimeout(() => {
              toLogin();
        }, 1000);
       break;
   // 404请求不存在
        case 404:
        tip('请求的资源不存在');
      break;
      default:
      console.log(other);
}}

export default axios