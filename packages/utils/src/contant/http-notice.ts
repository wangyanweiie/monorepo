/**
 * 连接错误信息提示
 */
export enum HTTP_ERROR_NOTICE {
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
