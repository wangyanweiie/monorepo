import type { App } from 'vue';
import { usePermissionStore } from './store/permission';
import { createPinia } from 'pinia';
import store from 'store2';
import router, { menuRoutes } from './router/index';
import xLayout from './layout/layout.vue';

/**
 * 初始化APP
 */
export function initApp(app: App<Element>): void {
    const pinia = createPinia();
    app.use(pinia);

    const permissionStore = usePermissionStore();

    // 设置权限
    permissionStore.setRoutes(menuRoutes);
    const permissions = store.local.get('permissions');

    permissionStore.setPermission(permissions);

    // 动态加载路由
    const activeRoutes = permissionStore.activeRoutes;

    router.addRoute({
        path: '/',
        name: '/',
        component: markRaw(xLayout),
        redirect: '/menu1',
        meta: {
            title: '/',
        },
        children: activeRoutes,
    });

    app.use(router);
}
