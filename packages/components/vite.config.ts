import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Inspect from 'vite-plugin-inspect';
import ElementPlus from 'unplugin-element-plus/vite';

const pathSrc = path.resolve(__dirname, 'src');
const pathDev = path.resolve(__dirname, 'development');

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(pathSrc, 'index.ts'),
            name: 'x-mart',
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'element-plus', 'vue-router'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                    'vue-router': 'VueRouter',
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
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue'],

            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
            resolvers: [ElementPlusResolver()],

            dts: path.resolve('types/auto-imports.d.ts'),
        }),

        Components({
            resolvers: [
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep'],
                }),

                // 自动导入 Element Plus 组件
                ElementPlusResolver(),
            ],

            dts: path.resolve('types/components.d.ts'),
        }),

        Icons({
            autoInstall: true,
        }),

        Inspect(),

        ElementPlus({}),

        dts(),
    ],
});
