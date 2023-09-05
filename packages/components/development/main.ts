import { createApp } from 'vue';
import mitt from 'mitt';
import { createPinia } from 'pinia';
import App from '@dev/App.vue';
import router from '@dev/router/index';
import permission from '@dev/directive/permission';
import { usePermission } from '@dev/store/permission';

(() => {
    const app = createApp(App);

    // 注册状态管理器
    app.use(createPinia());

    // 注册路由
    app.use(router);

    // 注册权限指令
    app.use(permission);

    // 设置路由权限
    usePermission();

    // 事件通讯
    app.config.globalProperties.$bus = mitt();

    // 挂载
    app.mount('#app');
})();
