import axios from 'axios';
import { ElNotification } from 'element-plus';
import { throttle } from 'lodash-es';

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
 * 操作提示
 */
var OPERATION_NOTICE;
(function (OPERATION_NOTICE) {
    /** 暂无数据 */
    OPERATION_NOTICE["NO_DATA"] = "\u6682\u65E0\u6570\u636E";
    /** 勾选 */
    OPERATION_NOTICE["SELECT_NONE"] = "\u672A\u9009\u4E2D\u6570\u636E";
    OPERATION_NOTICE["SELECT_A_LEAST_ONE"] = "\u81F3\u5C11\u52FE\u9009\u4E00\u6761\u6570\u636E\uFF01";
    OPERATION_NOTICE["SELECT_A_MOST_ONE"] = "\u8BF7\u52FE\u9009\u4E14\u81F3\u591A\u52FE\u9009\u4E00\u6761\u6570\u636E\uFF01";
    /** 新增 */
    OPERATION_NOTICE["CREATE_SUCCESS"] = "\u65B0\u589E\u6210\u529F";
    OPERATION_NOTICE["CREATE_ERROR"] = "\u65B0\u589E\u5931\u8D25";
    /** 编辑 */
    OPERATION_NOTICE["EDIT_SUCCESS"] = "\u7F16\u8F91\u6210\u529F";
    OPERATION_NOTICE["EDIT_ERROR"] = "\u7F16\u8F91\u5931\u8D25";
    /** 导入 */
    OPERATION_NOTICE["IMPORT_SUCCESS"] = "\u5BFC\u5165\u6210\u529F";
    OPERATION_NOTICE["IMPORT_ERROR"] = "\u5BFC\u5165\u5931\u8D25";
    /** 导出 */
    OPERATION_NOTICE["EXPORT_SUCCESS"] = "\u5BFC\u51FA\u6210\u529F";
    OPERATION_NOTICE["EXPORT_ERROR"] = "\u5BFC\u51FA\u5931\u8D25";
    /** 上传 */
    OPERATION_NOTICE["UPLOAD_SUCCESS"] = "\u4E0A\u4F20\u6210\u529F";
    OPERATION_NOTICE["UPLOAD_ERROR"] = "\u4E0A\u4F20\u5931\u8D25";
    /** 下载 */
    OPERATION_NOTICE["DOWNLOAD_SUCCESS"] = "\u4E0B\u8F7D\u6210\u529F";
    OPERATION_NOTICE["DOWNLOAD_ERROR"] = "\u4E0B\u8F7D\u5931\u8D25";
    /** 操作 */
    OPERATION_NOTICE["OPERATE_SUCCESS"] = "\u64CD\u4F5C\u6210\u529F";
    OPERATION_NOTICE["OPERATE_ERROR"] = "\u64CD\u4F5C\u5931\u8D25";
    /** 删除 */
    OPERATION_NOTICE["DELETE_CONFIRM"] = "\u662F\u5426\u786E\u8BA4\u5220\u9664?";
    OPERATION_NOTICE["DELETE_SUCCESS"] = "\u5220\u9664\u6210\u529F";
    OPERATION_NOTICE["DELETE_ERROR"] = "\u5220\u9664\u5931\u8D25";
    /** 退出 */
    OPERATION_NOTICE["LOGOUT_CONFIRM"] = "\u662F\u5426\u786E\u8BA4\u9000\u51FA\uFF1F";
    OPERATION_NOTICE["LOGOUT_SUCCESS"] = "\u9000\u51FA\u6210\u529F";
    OPERATION_NOTICE["LOGOUT_ERROR"] = "\u9000\u51FA\u5931\u8D25";
})(OPERATION_NOTICE || (OPERATION_NOTICE = {}));

/**
 * 拦截器配置函数
 * @param {Options} options 配置项
 * @returns 接口函数
 */
function setupAxiosInterceptors(options) {
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
        // 获取存储在本地的 token 放在请求头中
        const token = getStorage(options.storageTokenKey || 'token');
        if (token && config.headers) {
            config.headers[options.requestHeaderTokenKey || 'v-token'] = token;
        }
        // 更新请求参数
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
 * 1.校验是否为数字类型（正数/负数/整数/小数）
 * @param value 字符串
 */
function checkNumberFormat(value) {
    if (!value) {
        return;
    }
    // 正则表达式
    const reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
    const flag = reg.test(value);
    if (flag) {
        return value;
    }
    else {
        return null;
    }
}
/**
 * 2.强制保留小数位方法
 * @param value 要处理的数据
 * @param precision 小数位数
 */
function keepDecimalPrecision(value, precision) {
    if (!value) {
        return;
    }
    // 将数字转换为字符串
    let res = String(value);
    // 小数点的索引值
    let posDecimalIndex = res.indexOf('.');
    // 当整数，即 posDecimalIndex = -1 时，拼接小数点
    if (posDecimalIndex === -1) {
        posDecimalIndex = res.length;
        res += '.';
    }
    // 当数字的长度 < 小数点索引 + precision 时，用 0 补全
    while (res.length <= posDecimalIndex + precision) {
        res += '0';
    }
    return res;
}
/**
 * 3.将枚举转换为 options
 * @param enumeration 枚举
 */
function transformEnumToOptions(enumeration) {
    // Object.entries 返回给定对象自身可枚举属性的键值对数组
    const list = Object.entries(enumeration);
    const transList = list
        .map(([label, value]) => {
        return {
            label,
            value: value,
        };
    })
        .slice(list.length / 2);
    return transList;
}
/**
 * 4.将 '-' 拼接字符串改为驼峰格式
 * @param str 要转换的字符串
 */
function handleToHumpFormat(str) {
    // 小驼峰格式：x-table ==> xTable
    // const reg = /[-_](\w)/g;
    // return str.replace(reg, (initial, item) => {
    //     return item.toUpperCase();
    // });
    // 大驼峰格式：x-table ==> XTable
    const arr = str.split('-');
    const res = arr.map(item => `${item[0].toUpperCase()}${item.slice(1, item.length)}`).join('');
    return res;
}

export { HTTP_ERROR_NOTICE, OPERATION_NOTICE, checkNumberFormat, clearStorage, getStorage, handleToHumpFormat, keepDecimalPrecision, removeStorage, saveStorage, setupAxiosInterceptors, to, transformEnumToOptions };