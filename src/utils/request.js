import axios from 'axios'
import {Notification } from "element-ui";
import {getToken} from "@/utils/authority";

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:9527/',
    timeout: 5000
})
// 异常拦截处理器
const errorHandler = (error) => {
    const status = error.response.status;
    switch (status) {
        /* eslint-disable no-param-reassign */
        case 400: error.message = '请求错误'; break;
        case 401: error.message = '未授权，请登录'; break;
        case 403: error.message = '拒绝访问'; break;
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
        case 408: error.message = '请求超时'; break;
        case 500: error.message = '服务器内部错误'; break;
        case 501: error.message = '服务未实现'; break;
        case 502: error.message = '网关错误'; break;
        case 503: error.message = '服务不可用'; break;
        case 504: error.message = '网关超时'; break;
        case 505: error.message = 'HTTP版本不受支持'; break;
        default: break;
        /* eslint-disabled */
    }
    Notification({
        title: '错误',
        type: 'error',
        message: error.message
    })
    return Promise.reject(error);
};


//请求拦截器
request.interceptors.request.use(config=>{
        // 如果 token 存在
        // 让每个请求携带自定义 token 请根据实际情况自行修改
        // eslint-disable-next-line no-param-reassign
        if(config.baseURL === 'http://localhost:9527/')
            config.headers.Authorization = `Bearer ${getToken()}`;
        return config
    },errorHandler)

//响应拦截器
request.interceptors.response.use(response =>{
    const dataAxios = response.data
    const {code} = dataAxios
    let res
    // 如果没有 code 代表这不是项目后端开发的接口
    if(code === undefined){
        res = dataAxios
    }else{
        switch(code){
            case 0://正常
                res = dataAxios
                break
            case 403.17://身份已过期
                Notification({
                    title: '错误',
                    type: 'error',
                    message: '身份已过期'
                })
                res = dataAxios
                break
            default:
                res = dataAxios
                Notification({
                    title: '错误',
                    type: 'error',
                    message: res.msg
                })
                break
        }
    }
    return res
},errorHandler)


export default request
