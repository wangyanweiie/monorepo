import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';
import Inspect from 'vite-plugin-inspect';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy';

const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
    resolve: {
        alias: {
            '@': pathSrc,
        },
    },

    plugins: [
        Vue(),

        Icons({
            autoInstall: true,
        }),

        /**
         * 自动引入 vue 等插件 hooks
         */
        AutoImport({
            imports: ['vue', 'vue-router'],

            // 自定义组件解析器
            resolvers: [ElementPlusResolver(), IconsResolver()],

            // 配置文件生成位置
            dts: path.resolve(pathSrc, 'src/types/auto-imports.d.ts'),

            // eslint 报错解决
            eslintrc: {
                // 当 enabled 为 true 时，会根据 filepath 生成一个 eslint 的配置文件，需要引入到 eslint 的配置文件中
                enabled: false,
                filepath: './.eslintrc-auto-import.json',
                globalsPropValue: true,
            },
        }),

        /**
         * 自动引入自定义组件
         */
        Components({
            // 自定义组件解析器
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
            ],

            // 配置文件生成位置
            dts: path.resolve(pathSrc, 'src/types/components.d.ts'),
        }),

        /**
         * 检查插件
         */
        Inspect(),

        /**
         * 增强 Vue 开发者体验
         */
        VueDevTools(),

        /**
         * 传统浏览器兼容性支持
         */
        legacy({
            targets: ['chrome 52'],
        }),
    ],
});
