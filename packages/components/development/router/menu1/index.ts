import { type RouteRecordRaw } from 'vue-router';
import { subRoutes } from './sub';
// import { ParentView, ParentMenuView } from '@/index';

export const menu1Routes: RouteRecordRaw = {
    path: '/menu1',
    name: 'menu1',
    // 等价写法
    component: () => import('@dev/views/menu1/index.vue'),
    // component: h(ParentView, {
    //     matchedIndex: 2,
    // }),
    redirect: '/menu1/sub',
    meta: {
        title: 'menu1',
        icon: 'FolderOpened',
    },
    children: [
        {
            path: '/menu1/sub',
            name: 'menu1-sub',
            redirect: '/menu/sub/sub1',
            // 等价写法
            component: () => import('@dev/views/menu1/sub/index.vue'),
            // component: h(ParentMenuView, {
            //     menus: subRoutes,
            //     matchedIndex: 3,
            // }),
            meta: {
                title: 'menu1-sub',
                icon: '',
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
                icon: '',
            },
        },
        {
            path: '/menu1/demo2',
            name: 'menu1-demo2',
            component: () => import('@dev/views/menu1/demo2.vue'),
            meta: {
                title: 'menu1-demo2',
                icon: '',
            },
        },
    ],
};
