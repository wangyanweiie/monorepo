import type { App } from 'vue';
import { createPinia } from 'pinia';
import store from 'store2';
import { usePermissionStore } from '@dev/store/permission';
import router, { menuRoutes } from '@dev/router/index';
import appLayout from '@dev/layout/layout.vue';

/**
 * 初始化 APP
 */
export function handleInit(app: App<Element>): void {
    // pinia
    const pinia = createPinia();

    app.use(pinia);

    // 更新路由与权限数组
    const permissionStore = usePermissionStore();
    const permissions = store.local.get('permissions');

    permissionStore.setPermission(permissions);
    permissionStore.setRoutes(menuRoutes);

    // FIXME: 动态加载路由？
    const activeRoutes = permissionStore.activeRoutes;

    router.addRoute({
        path: '/',
        name: '/',
        component: markRaw(appLayout),
        redirect: activeRoutes[0].path,
        meta: {
            title: '/',
        },
        children: activeRoutes,
    });

    app.use(router);
}
