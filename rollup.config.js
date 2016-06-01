import npm      from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'
import babel    from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  external: ['validator'],
  globals: {
    validator: 'validator',
  },
  dest: 'dist/validation-rule-set.umd.js',
  format: 'umd',
  moduleName: 'validation_rule_set',
  sourceMap: true,
  plugins: [
    npm({ jsnext: true }),
    commonjs(),
    babel({
      babelrc: false,
      presets: ["es2015-rollup"]
    }),
  ]
}
