import request from '@/utils/request'

export function httpGetUserInfo(body){
    return request({
        url: '/api/user/getInfo',
        method: 'post',
        data: body
    })
}

