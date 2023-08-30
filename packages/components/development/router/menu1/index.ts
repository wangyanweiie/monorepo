import { type RouteRecordRaw } from 'vue-router';
import { ParentView, ParentMenuView } from '@/index';
import { subRoutes } from './sub';

export const menu1Routes: RouteRecordRaw = {
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
            // component: h(ParentMenuView, {
            //     menus: subRoutes,
            //     matchIndex: 3,
            // }),
            component: () => import('@dev/views/menu1/sub/index.vue'),
            meta: {
                title: 'menu1-sub',
                icon: 'Setting',
                keepAlive: true,
            },
            children: subRoutes,
        },
        {
            path: '/menu1/demo1',
            name: 'menu1-demo1',
            component: () => import('@dev/views/menu1/demo1.vue'),
            meta: {
                title: 'menu1-demo1',
                icon: 'Setting',
                keepAlive: true,
            },
        },
        {
            path: '/menu1/demo2',
            name: 'menu1-demo2',
            component: () => import('@dev/views/menu1/demo2.vue'),
            meta: {
                title: 'menu1-demo2',
                icon: 'Setting',
                keepAlive: true,
            },
        },
    ],
};
