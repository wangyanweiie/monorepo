import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import appLayout from '@dev/layout/index.vue';
import { menu1Routes } from './menu1';
import { menu2Routes } from './menu2';
import { menu3Routes } from './menu3';

/**
 * menu-routes
 */
const menuRoutes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@dev/views/home/index.vue'),
        meta: {
            title: '首页',
            icon: 'Folder',
        },
    },
    menu1Routes,
    menu2Routes,
    menu3Routes,
];

/**
 * routers
 */
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '/',
        component: markRaw(appLayout),
        redirect: '/home',
        meta: {
            icon: 'HomeFilled',
            title: 'index',
        },
        children: menuRoutes,
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@dev/views/not-found/404.vue'),
        meta: {
            title: '404',
        },
    },
];

/**
 * router
 */
const router = createRouter({
    // 历史模式
    history: createWebHistory(),
    routes,
});

export default router;
export { menuRoutes, routes };
