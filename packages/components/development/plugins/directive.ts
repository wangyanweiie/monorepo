import type { App } from 'vue';
import permission from '@dev/directive/v-permission';
import throttle from '@dev/directive/v-throttle';
import copy from '@dev/directive/v-copy';

/**
 * 自定义指令
 */
const directives: any = {
    permission,
    throttle,
    copy,
};

export default {
    install(app: App) {
        Object.keys(directives).forEach(key => {
            /**
             * 插件发挥作用的常见场景主要包括以下几种：
             * 1.通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令
             * 2.通过 app.provide() 使一个资源可被注入进整个应用
             * 3.向 app.config.globalProperties 中添加一些全局实例属性或方法
             * 4.一个可能上述三种都包含了的功能库 (例如 vue-router)
             */
            app.directive(key, directives[key]);
        });
    },
};
