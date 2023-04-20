import terser from '@rollup/plugin-terser';
import { globSync } from 'glob';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      resolve(),
      commonjs(),
      terser({
        format: {
          comments: false,
        },
      }),
    ],
    external: ['fs', 'path'],
  },
  {
    input: './dist/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({
        hook: 'buildEnd',
        targets: [
          './dist/geometry',
          './dist/utils',
          ...globSync('./dist/*.d.ts', { ignore: './dist/index.d.ts' }),
        ],
      }),
      copy({
        targets: [{ src: './package.json', dest: './dist' }],
      }),
    ],
  },
];
