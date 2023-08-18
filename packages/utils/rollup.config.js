import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: './src/index.ts',
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
        plugins: [typescript({ sourceMap: false })],
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
