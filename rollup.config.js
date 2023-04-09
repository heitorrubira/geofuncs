import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'esm',
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
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({ hook: 'buildEnd', targets: [ './dist/geometry', './dist/utils' ] })
    ],
  },
];
