import npm      from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import babel    from 'rollup-plugin-babel';
import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/main.js',
  external: [
    'validator',
    path.resolve( './src/main.js' )
  ],
  globals: {
    validator: 'validator',
  },
  dest: 'dist/validation-rule-set.umd.js',
  format: 'umd',
  moduleName: 'validation_rule_set',
  sourceMap: true,
  plugins: [
    // npm({ jsnext: true }),
    nodeResolve({ jsnext: true, main: true }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelrc: false,
      presets: ["es2015-rollup"]
    }),
  ]
}
