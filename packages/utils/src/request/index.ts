import axios, { type AxiosError, type AxiosResponse } from 'axios';
import { ElNotification } from 'element-plus';
import { throttle } from 'lodash-es';
import type { Options } from './interface';
import { getStorage } from '../storage/index';

/**
 * 连接错误信息提示
 */
enum HTTP_ERROR_NOTICE {
    /** 连接超时 */
    TIME_OUT = '连接超时',

    /** 未知错误 */
    UNKNOWN = '未知错误',

    /** 404 */
    NOT_FOUND = '访问地址不存在',

    /** 服务端错误 */
    SERVER_ERROR = '服务器错误',

    /** 网络连接错误 */
    NETWORK_ERROR = '网络错误，请检测本地或访问地址是否正常。',

    /** 登录过期 */
    EXPIRE = '登录过期，即将跳转至登录页',
}

/**
 * 拦截器配置函数
 * @param {Options} options 配置项
 * @returns 接口函数
 */
export function useAxiosInterceptors(options: Options) {
    if (!options.url) {
        throw new Error('未设置 url');
    }

    /**
     * axios实例
     */
    const service = axios.create({
        baseURL: options.url || '',
        timeout: options.timeout || 60000,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    /**
     * 请求拦截
     */
    service.interceptors.request.use(
        (config: any) => {
            const token = getStorage(options.storageTokenKey || 'token') as string;
            const baseUrl = getStorage(options.storageUrlKey || 'baseUrl') as string;

            // 设置 token
            if (token && config.headers) {
                config.headers[options.requestHeaderTokenKey || 'v-token'] = token;
            }

            // 设置 url
            if (baseUrl) {
                config.url = baseUrl + config.url;
            }

            // get 请求参数
            if (options.getMethodsParams && config.params) {
                config.params = {
                    ...options.getMethodsParams,
                    ...config.params,
                };
            }

            // post 请求参数
            if (options.postMethodsParams && config.data) {
                config.data = {
                    ...options.postMethodsParams,
                    ...config.data,
                };
            }

            return config;
        },

        error => {
            return Promise.reject(error);
        },
    );

    /**
     * 节流处理错误信息
     */
    const handleNetworkError = throttle(
        (message: string) => {
            ElNotification({
                type: 'error',
                message,
                zIndex: 9999,
            });
        },
        500,
        {
            leading: false,
            trailing: true,
        },
    );

    /**
     * 节流处理响应错误信息
     */
    const handleResponseError = throttle(
        (options: any) => {
            ElNotification(options);
        },
        500,
        {
            leading: false,
            trailing: true,
        },
    );

    /**
     * 响应拦截
     */
    service.interceptors.response.use(
        (response: AxiosResponse): any => {
            const responsedata = response.data;
            const {
                code,
                message = HTTP_ERROR_NOTICE.UNKNOWN,
                data,
            } = response.data as {
                code: number;
                message: string;
                data: any;
            };

            // 是否响应成功
            const successStatus = options.successValidate
                ? options.successValidate(responsedata)
                : Math.floor(code / 100) === 1;

            if (successStatus) {
                return Promise.resolve(data || true);
            } else {
                switch (code) {
                    case options.expireCode || -997:
                        handleResponseError({
                            type: 'warning',
                            message: HTTP_ERROR_NOTICE.EXPIRE,
                            onClose: () => {
                                if (options.expireCallback) {
                                    options.expireCallback();
                                }
                            },
                        });

                        return Promise.resolve(false);

                    default:
                        handleResponseError({
                            type: 'error',
                            message: message,
                            zIndex: 9999,
                        });

                        return Promise.resolve(false);
                }
            }
        },
        (error: AxiosError) => {
            const statusCode = error.response?.status;

            // 响应错误
            if (!statusCode) {
                console.log('response error', error.toJSON());

                if (error.message.indexOf('timeout') !== -1) {
                    handleNetworkError(HTTP_ERROR_NOTICE.TIME_OUT);
                } else if (error.message.indexOf('Network Error') !== -1) {
                    handleNetworkError(HTTP_ERROR_NOTICE.NETWORK_ERROR);
                } else {
                    handleNetworkError(HTTP_ERROR_NOTICE.UNKNOWN);
                }

                return Promise.resolve(false);
            }

            // 非响应错误处理
            switch (statusCode) {
                case 404:
                    handleNetworkError(HTTP_ERROR_NOTICE.NOT_FOUND);
                    break;
                case 500:
                    handleNetworkError(HTTP_ERROR_NOTICE.SERVER_ERROR);
                    break;
                default:
                    handleNetworkError(HTTP_ERROR_NOTICE.UNKNOWN);
                    break;
            }

            return Promise.resolve(false);
        },
    );

    return {
        get: service.get,
        post: service.post,
        put: service.put,
        del: service.delete,
    };
}
