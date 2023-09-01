import type { App } from 'vue';
import { createPinia } from 'pinia';
import store from 'store2';
import { usePermissionStore } from '@dev/store/permission';
import router, { menuRoutes } from '@dev/router/index';

/**
 * 初始化 APP
 */
export function handleInit(app: App<Element>): void {
    // pinia
    const pinia = createPinia();

    app.use(pinia);

    // 更新路由与权限数组
    const { setPermission, setRoutes, setActiveRouteList } = usePermissionStore();
    const permissions = store.local.get('permissions');

    setPermission(permissions);
    setRoutes(menuRoutes);
    setActiveRouteList();

    app.use(router);
}
