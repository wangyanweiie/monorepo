// import ParentView from '../views/components/menu-view.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import xLayout from '../layout/layout.vue';
import { ParentView, ParentMenuView } from '@/index';
/**
 * 菜单路由
 */
// export const menuRoutes: RouteRecordRaw[] = [
//     {
//         path: '/layout',
//         name: 'layout',
//         redirect: '/layout/index',
//         component: markRaw(xLayout),
//         meta: {
//             title: 'layout',
//             icon: 'Box',
//         },
//         children: [
//             {
//                 path: '/layout/index',
//                 name: 'layout-index',
//                 component: () => import('../views/layout/index.vue'),
//                 redirect: '/layout/index/one',
//                 meta: {
//                     title: 'layout-index',
//                     icon: 'Box',
//                 },
//                 children: [
//                     {
//                         path: '/layout/index/one',
//                         name: 'layout-one',
//                         component: () =>
//                             import('@dev/views/layout/layout-one.vue'),

//                         meta: {
//                             title: 'layout-one',
//                             icon: 'Box',
//                             // hidden: true,
//                         },
//                     },
//                     {
//                         path: '/layout/index/two',
//                         name: 'layout-two',
//                         component: () =>
//                             import('@dev/views/layout/layout-two.vue'),

//                         meta: {
//                             title: 'layout-two',
//                             icon: 'Box',
//                             // hidden: true,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         path: '/form',
//         name: 'form',
//         redirect: '/form/demo1',
//         component: markRaw(xLayout),
//         meta: {
//             title: 'form',
//             icon: 'Box',
//         },
//         children: [
//             {
//                 path: '/form/demo',
//                 redirect: '/form/demo1',
//                 component: () => import('@dev/views/form/index.vue'),
//                 meta: {
//                     title: 'form-demo',
//                     icon: 'HomeFilled',
//                 },
//                 children: [
//                     {
//                         path: '/form/demo1',
//                         name: 'form-demo1',
//                         component: () => import('@dev/views/form/demo1.vue'),
//                         meta: {
//                             title: 'form-demo1',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                     {
//                         path: '/form/demo2',
//                         name: 'form-demo2',
//                         component: () => import('@dev/views/form/demo2.vue'),
//                         meta: {
//                             title: 'form-demo2',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },

//     {
//         path: '/form-test1',
//         name: 'form-test1',
//         redirect: '/form-test1/demo',
//         component: markRaw(xLayout),
//         meta: {
//             title: 'form-test1',
//             icon: 'Box',
//         },
//         children: [
//             {
//                 path: '/form-test1/demo',
//                 redirect: '/form-test1/demo1',
//                 component: () => import('@dev/views/form/index.vue'),
//                 meta: {
//                     title: 'form-test1-demo',
//                     icon: 'HomeFilled',
//                 },
//                 children: [
//                     {
//                         path: '/form-test1/demo/demo1',
//                         name: 'form-test1-demo1',
//                         component: () => import('@dev/views/form/demo1.vue'),
//                         meta: {
//                             title: 'form-test1-demo1',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                     {
//                         path: '/form-test1/demo2',
//                         name: 'form-test1-demo2',
//                         component: () => import('@dev/views/form/demo2.vue'),
//                         meta: {
//                             title: 'form-test1-demo2',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         path: '/form-test2',
//         name: 'form-test2',
//         redirect: '/form-test2/demo',
//         component: markRaw(xLayout),
//         meta: {
//             title: 'form-test2',
//             icon: 'Box',
//         },
//         children: [
//             {
//                 path: '/form-test2/demo',
//                 redirect: '/form-test2/demo1',
//                 component: () => import('@dev/views/form/index.vue'),
//                 meta: {
//                     title: 'form-test2-demo',
//                     icon: 'HomeFilled',
//                 },
//                 children: [
//                     {
//                         path: '/form-test2/demo/demo1',
//                         name: 'form-test2-demo1',
//                         component: () => import('@dev/views/form/demo1.vue'),
//                         meta: {
//                             title: 'form-test2-demo1',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                     {
//                         path: '/form-test2/demo2',
//                         name: 'form-test2-demo2',
//                         component: () => import('@dev/views/form/demo2.vue'),
//                         meta: {
//                             title: 'form-test2-demo2',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         path: '/form-test3',
//         name: 'form-test3',
//         redirect: '/form-test3/demo',
//         component: markRaw(xLayout),
//         meta: {
//             title: 'form-test3',
//             icon: 'Box',
//         },
//         children: [
//             {
//                 path: '/form-test3/demo',
//                 redirect: '/form-test3/demo1',
//                 component: () => import('@dev/views/form/index.vue'),
//                 meta: {
//                     title: 'form-test3-demo',
//                     icon: 'HomeFilled',
//                 },
//                 children: [
//                     {
//                         path: '/form-test3/demo/demo1',
//                         name: 'form-test3-demo1',
//                         component: () => import('@dev/views/form/demo1.vue'),
//                         meta: {
//                             title: 'form-test3-demo1',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                     {
//                         path: '/form-test3/demo2',
//                         name: 'form-test3-demo2',
//                         component: () => import('@dev/views/form/demo2.vue'),
//                         meta: {
//                             title: 'form-test3-demo2',
//                             icon: 'Box',
//                             keepAlive: true,
//                             // hidden: true,
//                         },
//                     },
//                 ],
//             },
//         ],
//     },
//     // {
//     //     path: '/table',
//     //     name: 'table',
//     //     component: () => import('@dev/views/table/index.vue'),
//     //     meta: {
//     //         title: 'table',
//     //         icon: 'Box',
//     //     },
//     //     children: [
//     //         {
//     //             path: '/table/demo1',
//     //             name: 'table-demo1',
//     //             component: () => import('@dev/views/table/demo1.vue'),
//     //             meta: {
//     //                 title: 'table-demo1',
//     //                 icon: 'Box',
//     //                 // hidden: true,
//     //             },
//     //         },
//     //         {
//     //             path: '/table/demo2',
//     //             name: 'table-demo2',
//     //             component: () => import('@dev/views/table/demo2.vue'),
//     //             meta: {
//     //                 title: 'table-demo2',
//     //                 icon: 'Box',
//     //                 // hidden: true,
//     //             },
//     //         },
//     //     ],
//     // },
// ];

export const menu3Routes: RouteRecordRaw[] = [
    {
        path: '/menu3/demo1',
        name: 'menu3-demo1',
        component: () => import('@dev/views/menu2/menu2-demo1.vue'),
        meta: {
            title: 'menu3-demo1',
            icon: 'Setting',
            hidden: true,
        },
    },
    {
        path: '/menu3/demo2',
        name: 'menu3-demo2',
        component: () => import('@dev/views/menu2/menu2-demo2.vue'),
        meta: {
            title: 'menu3-demo2',
            icon: 'Setting',
            hidden: true,
        },
    },
];

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
