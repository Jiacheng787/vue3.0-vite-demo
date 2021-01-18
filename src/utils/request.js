import axios from 'axios'

const service = axios.create({
    baseURL: '/',
    timeout: 1000000, // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(
    (config) => {
        // 请求拦截
        // 例如判断用户是否登录，向请求头中加token
        return config
    },
    (error) => {
        // 发送失败
        return Promise.reject(error);
    }
)

// 响应拦截
service.interceptors.response.use(
    (response) => {
        const { headers, data, status } = response;
        if(status == '200' || data.success || data.result == 'success') {
            return data
        } else {
            return Promise.reject();
        }
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default service