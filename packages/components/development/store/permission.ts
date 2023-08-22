import { defineStore } from 'pinia';
import type { RouteRecordRaw } from 'vue-router';
import { generateActiveRoutes, generateCacheList, generateShowMenus } from '@/index';

/**
 * 权限缓存状态
 */
export const usePermissionStore = defineStore('permission', () => {
    /**
     ********** 权限 **********
     */
    // 是否开启权限设置
    const usable = ref<boolean>(false);

    // 开启权限
    function enablePermission(): void {
        usable.value = true;
    }

    // 关闭权限
    function disablePermission(): void {
        usable.value = false;
    }

    // 权限数组
    const permissions = ref<string[]>([]);

    // 更新权限数组
    function setPermission(value: string[]): void {
        permissions.value = value;
    }

    /**
     ********** 路由 **********
     */
    // 路由数组
    const routes = ref<RouteRecordRaw[]>([]);

    // 更新路由数组
    function setRoutes(value: RouteRecordRaw[]): void {
        routes.value = value;
    }

    // 可用路由数组
    const activeRoutes = computed<RouteRecordRaw[]>(() => {
        if (usable.value) {
            return generateActiveRoutes(routes.value, permissions.value);
        }

        return generateActiveRoutes(routes.value);
    });

    /**
     ********** 缓存 **********
     */
    // 是否使用缓存
    const useCache = ref<boolean>(true);

    // 使用缓存
    function enableCache(): void {
        useCache.value = true;
    }

    // 禁用缓存
    function disableCache(): void {
        useCache.value = false;
    }

    /// 缓存路由数组
    const cacheList = computed<string[]>(() => {
        if (!useCache.value) {
            return [];
        }

        if (usable.value) {
            return generateCacheList(routes.value, permissions.value);
        }

        return generateCacheList(routes.value);
    });

    /**
     ********** 菜单 **********
     */
    const showMenus = computed<RouteRecordRaw[]>(() => {
        if (usable.value) {
            return generateShowMenus(routes.value, permissions.value);
        }

        return generateShowMenus(routes.value);
    });

    return {
        usable,
        enablePermission,
        disablePermission,
        permissions,
        setPermission,
        routes,
        setRoutes,
        activeRoutes,
        useCache,
        enableCache,
        disableCache,
        cacheList,
        showMenus,
    };
});
