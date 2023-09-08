import type { RouteRecordRaw } from 'vue-router';
import type IconNameMap from '@element-plus/icons-vue';
export type IconTypes = keyof typeof IconNameMap;
/**
 * 生成缓存数组
 * @param { RouteRecordRaw[] } routes 路由数组
 * @param { string[] | undefined } permissions 权限数组
 * @returns { string[] } 缓存数组
 */
export declare function generateCacheList(routes: RouteRecordRaw[], permissions?: string[]): string[];
/**
 * 生成可用路由
 * @param { RouteRecordRaw[] } routes 路由数组
 * @param { string[] | undefined } permissions 权限数组
 * @returns { RouteRecordRaw[] } 可用路由
 */
export declare function generateActiveRoutes(routes: RouteRecordRaw[], permissions?: string[]): RouteRecordRaw[];
/**
 * 生成菜单路由
 * @param { RouteRecordRaw[] } routes 路由数组
 * @param { string[] | undefined } permissions 权限数组
 * @returns  { RouteRecordRaw[] } 菜单路由
 */
export declare function generateShowMenus(routes: RouteRecordRaw[], permissions?: string[]): RouteRecordRaw[];
