import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import Dts from 'vite-plugin-dts';
import Inspect from 'vite-plugin-inspect';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import ElementPlus from 'unplugin-element-plus/vite';
import VueDevTools from 'vite-plugin-vue-devtools';

const pathSrc = path.resolve(__dirname, 'src');
const pathDev = path.resolve(__dirname, 'development');

export default defineConfig({
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                // 生产环境时删除 console 与 debugger
                drop_console: true,
                drop_debugger: true,
            },
        },
        lib: {
            entry: path.resolve(pathSrc, 'index.ts'),
            name: 'custom',
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'vue-router', 'element-plus'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    'vue-router': 'VueRouter',
                    'element-plus': 'ElementPlus',
                },
            },
        },
    },

    resolve: {
        alias: {
            '@': pathSrc,
            '@dev': pathDev,
        },
    },

    plugins: [
        Vue(),

        Icons({
            autoInstall: true,
            // 编译方式
            // compiler: 'vue3',
            // 默认类名
            // defaultClass: '',
            // 默认样式
            // defaultStyle: '',
        }),

        /**
         * 自动引入 vue 等插件 hooks
         */
        AutoImport({
            imports: ['vue', 'vue-router'],

            // 自定义组件解析器
            resolvers: [ElementPlusResolver(), IconsResolver()],

            // 配置文件生成位置
            dts: path.resolve('types/auto-imports.d.ts'),

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
            // 指定组件位置，默认是src/components
            // dirs: ['src/components'],

            // 组件的有效文件扩展名。
            // extensions: ['vue'],

            // 自动导入指令
            // 默认值：Vue 3 的 `true`，Vue 2 的 `false`
            // 需要 Babel 来为 Vue 2 进行转换，出于性能考虑，它默认处于禁用状态。
            // directives: true,

            // 自定义组件解析器
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
            ],

            // 配置文件生成位置
            dts: path.resolve('types/components.d.ts'),
        }),

        /**
         * 检查插件
         */
        Inspect(),

        /**
         * 生成类型声明文件
         */
        Dts(),

        /**
         * 为 Element Plus 按需引入样式
         */
        ElementPlus({
            // options
        }),

        /**
         * 增强 Vue 开发者体验
         */
        VueDevTools(),
    ],
});
