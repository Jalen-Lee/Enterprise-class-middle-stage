import axios from 'axios'
import {MessageBox, Message, Notification } from "element-ui";

const service = axios.create({
    baseURL: '',
    timeout: 5000
})

//请求拦截器
service.interceptors.request.use(
    //发送请求前钩子
    config=>{

        return config
    },
    //请求失败钩子
    error => {
        console.log("发送请求失败",error)
        Notification({
            title: '错误',
            type: 'error',
            message: '请求发送失败'
        })
        return Promise.reject(error)
    }
)

//响应拦截器
service.interceptors.response.use(

    response=>{
        const res = response.data

        return res
    },
    error => {
        console.log('响应获取失败' + error) // for debug
        Notification({
            title: '错误',
            type: 'error',
            message: '响应获取失败'
        })
        return Promise.reject(error)
    }
)
export default service
