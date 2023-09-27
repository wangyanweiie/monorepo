import axios from 'axios';
import { ElNotification } from 'element-plus';
import { throttle } from 'lodash-es';

/**
 * @link https://github.com/scopsy/await-to-js
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function to(promise) {
    return promise
        .then((data) => [null, data])
        .catch((err) => {
        return [err, undefined];
    });
}

/**
 * 字符串是否为 JSON 字符串
 */
function judgeIsJSON(params) {
    if (!params) {
        return false;
    }
    try {
        JSON.parse(params);
    }
    catch {
        return false;
    }
    return true;
}
/**
 * local storage 是否可用
 */
function judgeStorageUseful() {
    if (window && window.localStorage) {
        return true;
    }
    throw new Error('当前环境 localstorage 不可用');
}
/**
 * 存储字段到 local storage
 * @param key 存储字段
 * @param value 存储值
 */
function saveStorage(key, value) {
    if (judgeStorageUseful()) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}
/**
 * 获取存储字段的值
 * @param key 存储字段
 */
function getStorage(key) {
    if (!judgeStorageUseful()) {
        return null;
    }
    const value = window.localStorage.getItem(key);
    if (value === null || !judgeIsJSON(value)) {
        return null;
    }
    return JSON.parse(value);
}
/**
 * 删除存储字段
 * @param key 存储字段
 */
function removeStorage(key) {
    if (judgeStorageUseful()) {
        window.localStorage.removeItem(key);
    }
}
/**
 * 清空所有存储字段
 */
function clearStorage() {
    if (judgeStorageUseful()) {
        window.localStorage.clear();
    }
}

/**
 * 连接错误信息提示
 */
var HTTP_ERROR_NOTICE;
(function (HTTP_ERROR_NOTICE) {
    /** 连接超时 */
    HTTP_ERROR_NOTICE["TIME_OUT"] = "\u8FDE\u63A5\u8D85\u65F6";
    /** 未知错误 */
    HTTP_ERROR_NOTICE["UNKNOWN"] = "\u672A\u77E5\u9519\u8BEF";
    /** 404 */
    HTTP_ERROR_NOTICE["NOT_FOUND"] = "\u8BBF\u95EE\u5730\u5740\u4E0D\u5B58\u5728";
    /** 服务端错误 */
    HTTP_ERROR_NOTICE["SERVER_ERROR"] = "\u670D\u52A1\u5668\u9519\u8BEF";
    /** 网络连接错误 */
    HTTP_ERROR_NOTICE["NETWORK_ERROR"] = "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u6D4B\u672C\u5730\u6216\u8BBF\u95EE\u5730\u5740\u662F\u5426\u6B63\u5E38\u3002";
    /** 登录过期 */
    HTTP_ERROR_NOTICE["EXPIRE"] = "\u767B\u5F55\u8FC7\u671F\uFF0C\u5373\u5C06\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875";
})(HTTP_ERROR_NOTICE || (HTTP_ERROR_NOTICE = {}));
/**
 * 拦截器配置函数
 * @param {Options} options 配置项
 * @returns 接口函数
 */
function useAxiosInterceptors(options) {
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
    service.interceptors.request.use((config) => {
        const token = getStorage(options.storageTokenKey || 'token');
        const baseUrl = getStorage(options.storageUrlKey || 'baseUrl');
        // 设置 token
        if (token && config.headers) {
            config.headers[options.requestHeaderTokenKey || 'v-token'] = token;
        }
        // 更新 base-url
        if (baseUrl) {
            config.url = baseUrl + config.url;
        }
        // 将配置的全局参数更新到请求参数
        if (options.getMethodsParams && config.params) {
            config.params = {
                ...options.getMethodsParams,
                ...config.params,
            };
        }
        if (options.postMethodsParams && config.data) {
            config.data = {
                ...options.postMethodsParams,
                ...config.data,
            };
        }
        return config;
    }, error => {
        return Promise.reject(error);
    });
    /**
     * 节流处理错误信息
     */
    const handleNetworkError = throttle((message) => {
        ElNotification({
            type: 'error',
            message,
            zIndex: 9999,
        });
    }, 500, {
        leading: false,
        trailing: true,
    });
    /**
     * 节流处理响应错误信息
     */
    const handleResponseError = throttle((options) => {
        ElNotification(options);
    }, 500, {
        leading: false,
        trailing: true,
    });
    /**
     * 响应拦截
     */
    service.interceptors.response.use((response) => {
        const responsedata = response.data;
        // 是否响应成功
        const successStatus = options.successValidate
            ? options.successValidate(responsedata)
            : Math.floor(responsedata.code / 100) === 1;
        if (successStatus) {
            const { data } = response.data;
            return Promise.resolve(data || true);
        }
        else {
            switch (responsedata.code) {
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
                    const { message } = response.data;
                    ElNotification({
                        type: 'error',
                        message: message || HTTP_ERROR_NOTICE.UNKNOWN,
                        zIndex: 9999,
                    });
                    return Promise.resolve(false);
            }
        }
    }, (error) => {
        const statusCode = error.response?.status;
        // 响应错误
        if (!statusCode) {
            console.log('response error', error.toJSON());
            if (error.message.indexOf('timeout') !== -1) {
                handleNetworkError(HTTP_ERROR_NOTICE.TIME_OUT);
            }
            else if (error.message.indexOf('Network Error') !== -1) {
                handleNetworkError(HTTP_ERROR_NOTICE.NETWORK_ERROR);
            }
            else {
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
    });
    /**
     * GET
     */
    const get = service.get;
    /**
     * POST
     */
    const post = service.post;
    /**
     * PUT
     */
    const put = service.put;
    /**
     * DELETE
     */
    const del = service.delete;
    return {
        get,
        post,
        put,
        del,
    };
}

export { clearStorage, getStorage, removeStorage, saveStorage, to, useAxiosInterceptors };
