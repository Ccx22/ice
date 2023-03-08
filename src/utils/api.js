import instance from './request'
export function testApi(params) {
    return instance({
        url: "xxx",
        method: 'get',
        params
    })
}