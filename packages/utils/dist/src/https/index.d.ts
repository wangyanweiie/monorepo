import { type AxiosResponse } from 'axios';
import type { Options } from './interface';
/**
 * 拦截器配置函数
 * @param {Options} options 配置项
 * @returns 接口函数
 */
export declare function setupAxiosInterceptors(options: Options): {
    get: <T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: import("axios").AxiosRequestConfig<D> | undefined) => Promise<R>;
    post: <T_1 = any, R_1 = AxiosResponse<T_1, any>, D_1 = any>(url: string, data?: D_1 | undefined, config?: import("axios").AxiosRequestConfig<D_1> | undefined) => Promise<R_1>;
    put: <T_2 = any, R_2 = AxiosResponse<T_2, any>, D_2 = any>(url: string, data?: D_2 | undefined, config?: import("axios").AxiosRequestConfig<D_2> | undefined) => Promise<R_2>;
    del: <T_3 = any, R_3 = AxiosResponse<T_3, any>, D_3 = any>(url: string, config?: import("axios").AxiosRequestConfig<D_3> | undefined) => Promise<R_3>;
};
