import type { RouteRecordRaw } from 'vue-router';
import type IconNameMap from '@element-plus/icons-vue';
import { cloneDeep } from 'lodash-es';

export type IconTypes = keyof typeof IconNameMap;

/**
 * 生成缓存数组
 * @param { RouteRecordRaw[] } routes 路由数组
 * @param { string[] | undefined } permissions 权限数组
 * @returns 处理后数组
 */
export function generateCacheList(routes: RouteRecordRaw[], permissions?: string[]): string[] {
    const cacheList: string[] = [];

    for (let i = 0; i < routes.length; i += 1) {
        const currentRoute = routes[i];

        if (!currentRoute.meta) {
            continue;
        }

        // 无权限
        if (permissions && !permissions.includes(currentRoute.meta?.title as string)) {
            continue;
        }

        // 缓存
        if (currentRoute.meta.keepAlive) {
            cacheList.push(currentRoute.name as string);
        }

        // 区分 menu 类型
        if (currentRoute.children && currentRoute.children.length > 0) {
            // 递归 children
            const childCacheList = generateCacheList(currentRoute.children, permissions);
            cacheList.push(...childCacheList);
        }
    }

    return cacheList;
}

/**
 * 生成可用路由数组
 * @param { RouteRecordRaw[] } routes 路由数组
 * @param { string[] | undefined } permissions 权限数组
 * @returns 处理后数组
 */
export function generateActiveRoutes(routes: RouteRecordRaw[], permissions?: string[]): RouteRecordRaw[] {
    const cloneRoutes = cloneDeep(routes);
    const activeRoutes: RouteRecordRaw[] = [];

    for (let i = 0; i < cloneRoutes.length; i += 1) {
        const currentRoute = cloneRoutes[i];

        if (!currentRoute.meta) {
            continue;
        }

        // 无权限
        if (permissions && !permissions.includes(currentRoute.meta?.title as string)) {
            continue;
        }

        // 区分 menu 类型
        if (currentRoute.children && currentRoute.children.length > 0) {
            // 递归 children
            currentRoute.children = generateActiveRoutes(currentRoute.children, permissions);

            // 修改重定向
            currentRoute.redirect = currentRoute.children.at(0)?.path;
        }

        activeRoutes.push(currentRoute);
    }

    return activeRoutes;
}

/**
 * 生成菜单
 * @param { RouteRecordRaw[] } routes 路由数组
 * @param { string[] | undefined } permissions 权限数组
 * @returns 处理后数组
 */
export function generateShowMenus(routes: RouteRecordRaw[], permissions?: string[]): RouteRecordRaw[] {
    const cloneRoutes = cloneDeep(routes);
    const showMenus: RouteRecordRaw[] = [];

    for (let i = 0; i < cloneRoutes.length; i += 1) {
        const currentRoute = cloneRoutes[i];

        if (!currentRoute.meta) {
            continue;
        }

        // 无权限
        if (permissions && !permissions.includes(currentRoute.meta?.title as string)) {
            continue;
        }

        // 隐藏
        if (currentRoute.meta.hidden) {
            continue;
        }

        // 区分 menu 类型
        if (currentRoute.children && currentRoute.children.length > 0) {
            // 递归 children
            currentRoute.children = generateShowMenus(currentRoute.children, permissions);

            // 修改重定向
            currentRoute.redirect = currentRoute.children.at(0)?.path;
        }

        showMenus.push(currentRoute);
    }

    return showMenus;
}
