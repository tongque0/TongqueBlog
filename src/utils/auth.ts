import axios from 'axios';

const service = axios.create({
    baseURL: 'http://1.15.136.115:3007',
    timeout: 5000,
    headers: {

    }
})
//请求拦截
service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ""
    }
    return config
})
//响应拦截
service.interceptors.response.use((res) => {
    const code: number = res.data.status
    if (code != 200) {
        return Promise.reject(res.data)
    }
    return res
}, (err) => {
    return Promise.reject(err);

})

export default service