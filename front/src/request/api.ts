import axios from './request';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
interface Res {
  data: any;
  success: boolean;
  message?: string;
}

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 */

const get = (url: string, params = {}) => {
  return axios.get(url, {
    params: params,
  });
};

/**
 * 封装post请求
 * @param url
 * @param data
 */

const post = (url: string, data: any) => {
  return axios.post(url, data);
};

const postform = (url: string, data: any) => {
  return axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    data: data,
  });
};

/**
 * 封装put请求
 * @param url
 * @param data
 */

const put = (url: string, data: any) => {
  return axios.put(url, data);
};

/**
 * 封装del请求
 * @param url
 * @param data
 */

const del = (url: string, data = {}) => {
  return axios.delete(url, {
    params: data,
  });
};

export const getList = () => {
  return get('/list/2/1');
};

