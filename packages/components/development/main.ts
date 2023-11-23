import { createApp } from 'vue';
import mitt from 'mitt';
import { createPinia } from 'pinia';
import App from '@dev/App.vue';
import router from '@dev/router/index';
import directivePlugin from '@dev/plugins/directive';
import { setPermissionRoute } from '@dev/store/permission';

(() => {
    const app = createApp(App);

    // 注册状态管理器
    app.use(createPinia());

    // 注册路由
    app.use(router);

    // 注册指令
    app.use(directivePlugin);

    // 赋值路由数组并动态加载路由
    setPermissionRoute();

    // 事件通讯
    app.config.globalProperties.$bus = mitt();

    // 挂载
    app.mount('#app');
})();
