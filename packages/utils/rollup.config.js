import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

/**
 * Rollup 是一个用于 JavaScript 的模块打包工具，
 * 它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序；
 * 它使用 JavaScript 的 ES6 版本中包含的新标准化代码模块格式，
 * 而不是以前的 CommonJS 和 AMD 等特殊解决方案；
 * ES 模块允许你自由无缝地组合你最喜欢的库中最有用的个别函数。
 */
export default [
    {
        /**
         ** input
         * 该选项用于指定 bundle 的入口文件
         */
        input: './src/index.ts',

        /**
         ** output
         *   - 1.dir：该选项用于指定所有生成的 chunk 被放置在哪个目录中；
         *   - 2.format：该选项用于指定生成的 bundle 的格式；
         *     满足以下其中之一：
         *     -- amd：异步模块加载，适用于 RequireJS 等模块加载器
         *     -- cjs：CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）
         *     -- es：将 bundle 保留为 ES 模块文件，适用于其他打包工具，以及支持 <script type=module> 标签的浏览器（别名：esm，module）
         *     -- iife：自执行函数，适用于 <script> 标签（如果你想为你的应用程序创建 bundle，那么你可能会使用它）
         *     -- umd：通用模块定义规范，同时支持 amd，cjs 和 iife
         *     -- system：SystemJS 模块加载器的原生格式（别名：systemjs）
         */
        output: [
            {
                dir: 'dist',
                format: 'cjs',
                entryFileNames: '[name].cjs.js',
            },
            {
                dir: 'dist',
                format: 'esm',
                entryFileNames: '[name].esm.js',
            },
        ],

        /**
         * 插件
         */
        plugins: [typescript({ sourceMap: false })],

        /**
         ** external 核心功能：该选项用于匹配需要排除在 bundle 外部的模块；
         * 它的值可以是一个接收模块 id 参数并返回 true （表示外部依赖）或 false （表示非外部依赖）的函数，
         * 也可以是一个模块 ID 数组或者正则表达式，还可以只是单个的模块 ID 或正则表达式。
         * 被匹配的模块 ID 应该满足以下条件之一：
         *   - 1.外部依赖的名称，需要和引入语句中写法完全一致；
         *   - 2.解析过的模块 ID（如文件的绝对路径）；
         */
        external: ['element-plus', 'axios', 'lodash-es'],
    },
    {
        input: './src/index.ts',
        output: {
            file: './dist/index.d.ts',
            format: 'es',
        },
        plugins: [dts()],
        external: ['element-plus', 'axios', 'lodash-es'],
    },
];
