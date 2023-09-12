import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import Inspect from 'vite-plugin-inspect';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import legacyPlugin from '@vitejs/plugin-legacy';
import VueDevTools from 'vite-plugin-vue-devtools';

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
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(pathSrc, 'src/types/auto-imports.d.ts'),
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ['ep'],
                }),
            ],

            dts: path.resolve(pathSrc, 'src/types/components.d.ts'),
        }),

        Inspect(),
        legacyPlugin({
            targets: ['chrome 52'],
        }),
        VueDevTools(),
    ],
});
