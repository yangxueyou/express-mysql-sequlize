import axios from 'axios';

declare module 'axios' {
  interface IAxios<D = null> {
    code: string;
    message: string;
    success: boolean;
    extra: D;
  }
  export interface AxiosResponse<T = any, D = any> extends IAxios<D> {}
}
