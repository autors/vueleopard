import axios from 'axios';
import {Message} from 'iview';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // timeout: 8000,                  // 请求超时时间
  withCredentials: true
});

// request拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error);// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
)

export default service;
