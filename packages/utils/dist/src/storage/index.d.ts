/**
 * 存储字段到 local storage
 * @param key 存储字段
 * @param value 存储值
 */
export declare function saveStorage(key: string, value: unknown): void;
/**
 * 获取存储字段的值
 * @param key 存储字段
 */
export declare function getStorage(key: string): any;
/**
 * 删除存储字段
 * @param key 存储字段
 */
export declare function removeStorage(key: string): void;
/**
 * 清空所有存储字段
 */
export declare function clearStorage(): void;
