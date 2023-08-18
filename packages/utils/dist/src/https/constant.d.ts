/**
 * 连接错误信息提示
 */
export declare enum HTTP_ERROR_NOTICE {
    /**
     * 连接超时
     */
    TIME_OUT = "\u8FDE\u63A5\u8D85\u65F6",
    /**
     * 未知错误
     */
    UNKNOWN = "\u672A\u77E5\u9519\u8BEF",
    /**
     * 404
     */
    NOT_FOUND = "\u8BBF\u95EE\u5730\u5740\u4E0D\u5B58\u5728",
    /**
     * 服务端错误
     */
    SERVER_ERROR = "\u670D\u52A1\u5668\u9519\u8BEF",
    /**
     * 网络连接错误
     */
    NETWORK_ERROR = "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u6D4B\u672C\u5730\u6216\u8BBF\u95EE\u5730\u5740\u662F\u5426\u6B63\u5E38\u3002",
    /**
     * 登录过期
     */
    EXPIRE = "\u767B\u5F55\u8FC7\u671F\uFF0C\u5373\u5C06\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875"
}
/**
 * 操作提示
 */
export declare enum OPERATION_NOTICE {
    /**
     * 新增成功
     */
    CREATE_SUCCESS = "\u65B0\u589E\u6210\u529F",
    /**
     * 新增失败
     */
    CREATE_ERROR = "\u65B0\u589E\u5931\u8D25",
    /**
     * 编辑成功
     */
    EDIT_SUCCESS = "\u7F16\u8F91\u6210\u529F",
    /**
     * 编辑失败
     */
    EDIT_ERROR = "\u7F16\u8F91\u5931\u8D25",
    /**
     * 删除确认
     */
    DELETE_CONFIRM = "\u662F\u5426\u786E\u8BA4\u5220\u9664?",
    /**
     * 删除成功
     */
    DELETE_SUCCESS = "\u5220\u9664\u6210\u529F",
    /**
     * 删除失败
     */
    DELETE_ERROR = "\u5220\u9664\u5931\u8D25"
}
