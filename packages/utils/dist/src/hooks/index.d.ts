import type { Options } from './interface';
/**
 * 1.校验是否为数字类型（正数/负数/整数/小数）
 * @param value 字符串
 */
export declare function checkNumberFormat(value: string): string | null | undefined;
/**
 * 2.强制保留小数位方法
 * @param value 要处理的数据
 * @param precision 小数位数
 */
export declare function keepDecimalPrecision(value: number | string, precision: number): string | undefined;
/**
 * 3.将枚举转换为 options
 * @param enumeration 枚举
 */
export declare function transformEnumToOptions(enumeration: Record<string, string | number>): Options[];
/**
 * 4.将 '-' 拼接字符串改为驼峰格式
 * @param str 要转换的字符串
 */
export declare function handleToHumpFormat(str: string): string;
