import { type RouteRecordRaw } from 'vue-router';
import { ParentView } from '@/index';

export const menu2Routes: RouteRecordRaw = {
    path: '/menu2',
    name: 'menu2',
    component: () => import('@dev/views/menu2/index.vue'),
    redirect: '/menu2/demo1',
    meta: {
        title: 'menu2',
        icon: 'Setting',
    },
    children: [
        {
            path: '/menu2/demo1',
            name: 'menu2-demo1',
            component: () => import('@dev/views/menu2/demo1.vue'),
            meta: {
                title: 'menu2-demo1',
                icon: '',
            },
        },
        {
            path: '/menu2/demo2',
            name: 'menu2-demo2',
            component: () => import('@dev/views/menu2/demo2.vue'),
            meta: {
                title: 'menu2-demo2',
                icon: '',
            },
        },
    ],
};
