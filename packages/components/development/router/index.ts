import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import xLayout from '../layout/layout.vue';
import { ParentView, ParentMenuView } from '@/index';

const menu1Subs: RouteRecordRaw[] = [
    {
        path: '/menu1/sub/sub1',
        name: 'menu1-sub1',
        component: () => import('@dev/views/menu1/sub/menu1-sub1.vue'),
        meta: {
            title: 'menu1-sub1',
            icon: 'Setting',
            hidden: true,
            keepAlive: true,
        },
    },
    {
        path: '/menu1/sub/sub2',
        name: 'menu1-sub2',
        component: () => import('@dev/views/menu1/sub/menu1-sub2.vue'),
        meta: {
            title: 'menu1-sub2',
            icon: 'Setting',
            hidden: true,
            keepAlive: false,
        },
    },
];

export const menuRoutes: RouteRecordRaw[] = [
    {
        path: '/menu1',
        name: 'menu1',
        component: h(ParentView, { matchedIndex: 2 }),
        redirect: '/menu1/sub',
        meta: {
            title: 'menu1',
            icon: 'Setting',
        },
        children: [
            {
                path: '/menu1/sub',
                name: 'menu1-sub',
                redirect: '/menu/sub/sub1',
                component: h(ParentMenuView, {
                    menus: menu1Subs,
                }),
                meta: {
                    title: 'menu1-sub',
                    icon: 'Setting',
                    keepAlive: true,
                },
                children: menu1Subs,
            },
            {
                path: '/menu1/demo1',
                name: 'menu1-demo1',
                component: () => import('@dev/views/menu1/menu1-demo1.vue'),
                meta: {
                    title: 'menu1-demo1',
                    icon: 'Setting',
                    keepAlive: true,
                },
            },
            {
                path: '/menu1/demo2',
                name: 'menu1-demo2',
                component: () => import('@dev/views/menu1/menu1-demo2.vue'),
                meta: {
                    title: 'menu1-demo2',
                    icon: 'Setting',
                    keepAlive: true,
                },
            },
        ],
    },
    {
        path: '/menu2',
        name: 'menu2',
        component: h(ParentView, { matchedIndex: 2 }),
        redirect: '/menu2/demo1',
        meta: {
            title: 'menu2',
            icon: 'Setting',
        },
        children: [
            {
                path: '/menu2/demo1',
                name: 'menu2-demo1',
                component: () => import('@dev/views/menu2/menu2-demo1.vue'),
                meta: {
                    title: 'menu2-demo1',
                    icon: 'Setting',
                },
            },
            {
                path: '/menu2/demo2',
                name: 'menu2-demo2',
                component: () => import('@dev/views/menu2/menu2-demo2.vue'),
                meta: {
                    title: 'menu2-demo2',
                    icon: 'Setting',
                },
            },
        ],
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: () => import('@dev/views/form/demo1.vue'),
        meta: {
            title: 'demo1',
            icon: 'HomeFilled',
        },
    },
];

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '/',
        component: markRaw(xLayout),
        redirect: '/menu1',
        meta: {
            title: '/',
        },
        children: menuRoutes,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@dev/views/login/login.vue'),
        meta: {
            title: 'login',
        },
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
