import request from '@/utils/request'

export async function httpCheckToken(){
    return request({
        url: '/api/auth/checkToken',
        method: 'post'
    });
}

export async function httpLogin(body){
    return request({
        url: '/api/auth/login',
        method: 'post',
        data:body
    })
}
export async function httpLogout(){
    return request({
        url: '/api/auth/logout',
        method: 'post',
    })
}


