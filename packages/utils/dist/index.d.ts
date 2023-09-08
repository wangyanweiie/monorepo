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
 * 校验是否为数字类型（正数/负数/整数/小数）
 * @param value 字符串
 */
declare function checkNumberFormat(value: string): string | null | undefined;
/**
 * 强制保留小数位方法
 * @param value 要处理的数据
 * @param precision 小数位数
 */
declare function keepDecimalPrecision(value: number | string, precision: number): string | undefined;
/**
 * 将枚举转换为 options
 * @param enumeration 枚举
 */
declare function transformEnumToOptions(enumeration: Record<string, string | number>): Options[];
/**
 * 将 '-' 拼接字符串改为驼峰格式
 * @param str 要转换的字符串
 * @param type 要转换的驼峰格式
 */
declare function handleToHumpFormat(str: string, type: 'min' | 'max'): string;
/**
 * 生成 uuid
 */
declare function guid(): string;

export { checkNumberFormat, clearStorage, getStorage, guid, handleToHumpFormat, keepDecimalPrecision, removeStorage, saveStorage, setupAxiosInterceptors, to, transformEnumToOptions };
