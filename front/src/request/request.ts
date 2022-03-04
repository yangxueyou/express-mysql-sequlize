import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 注册响应拦截器
axios.interceptors.response.use((config) => {
  return config.data;
});
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('请求出错！');
    return Promise.reject(error);
  },
);

export default axios;
