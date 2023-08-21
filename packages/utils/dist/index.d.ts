import * as axios from 'axios';
import { AxiosResponse } from 'axios';

/**
 * 后端返回数据格式
 */
interface responseData {
    code: number;
    message: string | null;
    data: any;
}

/**
 * 拦截器配置函数参数
 */
interface Options$1 {
    /** url */
    url?: string;
    /** 超时时间 ms */
    timeout?: number;
    /** 保存在 local storage 里的 token 的 key 值 */
    storageTokenKey?: string;
    /** 请求头携带 token 的 key 值 */
    requestHeaderTokenKey?: string;
    /** 过期码 */
    expireCode?: number;
    /** 过期回调 */
    expireCallback?: () => void;
    /** get 请求携带的参数 */
    getMethodsParams?: Record<string, any>;
    /** post 请求携带的参数 */
    postMethodsParams?: Record<string, any>;
    /** 成功响函数 */
    successValidate?: (responseData: responseData) => boolean;
}

/**
 * 拦截器配置函数
 * @param {Options} options 配置项
 * @returns 接口函数
 */
declare function setupAxiosInterceptors(options: Options$1): {
    get: <T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: axios.AxiosRequestConfig<D> | undefined) => Promise<R>;
    post: <T_1 = any, R_1 = AxiosResponse<T_1, any>, D_1 = any>(url: string, data?: D_1 | undefined, config?: axios.AxiosRequestConfig<D_1> | undefined) => Promise<R_1>;
    put: <T_2 = any, R_2 = AxiosResponse<T_2, any>, D_2 = any>(url: string, data?: D_2 | undefined, config?: axios.AxiosRequestConfig<D_2> | undefined) => Promise<R_2>;
    del: <T_3 = any, R_3 = AxiosResponse<T_3, any>, D_3 = any>(url: string, config?: axios.AxiosRequestConfig<D_3> | undefined) => Promise<R_3>;
};

/**
 * @link https://github.com/scopsy/await-to-js
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
declare function to<T, U = Error>(promise: Promise<T>): Promise<[U, undefined] | [null, T]>;

/**
 * 存储字段到 local storage
 * @param key 存储字段
 * @param value 存储值
 */
declare function saveStorage(key: string, value: unknown): void;
/**
 * 获取存储字段的值
 * @param key 存储字段
 */
declare function getStorage(key: string): any;
/**
 * 删除存储字段
 * @param key 存储字段
 */
declare function removeStorage(key: string): void;
/**
 * 清空所有存储字段
 */
declare function clearStorage(): void;

interface Options {
    label: string;
    value: string | number;
}

/**
 * 1.校验是否为数字类型（正数/负数/整数/小数）
 * @param value 字符串
 */
declare function checkNumberFormat(value: string): string | null | undefined;
/**
 * 2.强制保留小数位方法
 * @param value 要处理的数据
 * @param precision 小数位数
 */
declare function keepDecimalPrecision(value: number | string, precision: number): string | undefined;
/**
 * 3.将枚举转换为 options
 * @param enumeration 枚举
 */
declare function transformEnumToOptions(enumeration: Record<string, string | number>): Options[];
/**
 * 4.将 '-' 拼接字符串改为驼峰格式
 * @param str 要转换的字符串
 */
declare function handleToHumpFormat(str: string): string;

/**
 * 连接错误信息提示
 */
declare enum HTTP_ERROR_NOTICE {
    /** 连接超时 */
    TIME_OUT = "\u8FDE\u63A5\u8D85\u65F6",
    /** 未知错误 */
    UNKNOWN = "\u672A\u77E5\u9519\u8BEF",
    /** 404 */
    NOT_FOUND = "\u8BBF\u95EE\u5730\u5740\u4E0D\u5B58\u5728",
    /** 服务端错误 */
    SERVER_ERROR = "\u670D\u52A1\u5668\u9519\u8BEF",
    /** 网络连接错误 */
    NETWORK_ERROR = "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u6D4B\u672C\u5730\u6216\u8BBF\u95EE\u5730\u5740\u662F\u5426\u6B63\u5E38\u3002",
    /** 登录过期 */
    EXPIRE = "\u767B\u5F55\u8FC7\u671F\uFF0C\u5373\u5C06\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875"
}
/**
 * 操作提示
 */
declare enum OPERATION_NOTICE {
    /** 暂无数据 */
    NO_DATA = "\u6682\u65E0\u6570\u636E",
    /** 勾选 */
    SELECT_NONE = "\u672A\u9009\u4E2D\u6570\u636E",
    SELECT_A_LEAST_ONE = "\u81F3\u5C11\u52FE\u9009\u4E00\u6761\u6570\u636E\uFF01",
    SELECT_A_MOST_ONE = "\u8BF7\u52FE\u9009\u4E14\u81F3\u591A\u52FE\u9009\u4E00\u6761\u6570\u636E\uFF01",
    /** 新增 */
    CREATE_SUCCESS = "\u65B0\u589E\u6210\u529F",
    CREATE_ERROR = "\u65B0\u589E\u5931\u8D25",
    /** 编辑 */
    EDIT_SUCCESS = "\u7F16\u8F91\u6210\u529F",
    EDIT_ERROR = "\u7F16\u8F91\u5931\u8D25",
    /** 导入 */
    IMPORT_SUCCESS = "\u5BFC\u5165\u6210\u529F",
    IMPORT_ERROR = "\u5BFC\u5165\u5931\u8D25",
    /** 导出 */
    EXPORT_SUCCESS = "\u5BFC\u51FA\u6210\u529F",
    EXPORT_ERROR = "\u5BFC\u51FA\u5931\u8D25",
    /** 上传 */
    UPLOAD_SUCCESS = "\u4E0A\u4F20\u6210\u529F",
    UPLOAD_ERROR = "\u4E0A\u4F20\u5931\u8D25",
    /** 下载 */
    DOWNLOAD_SUCCESS = "\u4E0B\u8F7D\u6210\u529F",
    DOWNLOAD_ERROR = "\u4E0B\u8F7D\u5931\u8D25",
    /** 操作 */
    OPERATE_SUCCESS = "\u64CD\u4F5C\u6210\u529F",
    OPERATE_ERROR = "\u64CD\u4F5C\u5931\u8D25",
    /** 删除 */
    DELETE_CONFIRM = "\u662F\u5426\u786E\u8BA4\u5220\u9664?",
    DELETE_SUCCESS = "\u5220\u9664\u6210\u529F",
    DELETE_ERROR = "\u5220\u9664\u5931\u8D25",
    /** 退出 */
    LOGOUT_CONFIRM = "\u662F\u5426\u786E\u8BA4\u9000\u51FA\uFF1F",
    LOGOUT_SUCCESS = "\u9000\u51FA\u6210\u529F",
    LOGOUT_ERROR = "\u9000\u51FA\u5931\u8D25"
}

export { HTTP_ERROR_NOTICE, OPERATION_NOTICE, checkNumberFormat, clearStorage, getStorage, handleToHumpFormat, keepDecimalPrecision, removeStorage, saveStorage, setupAxiosInterceptors, to, transformEnumToOptions };
