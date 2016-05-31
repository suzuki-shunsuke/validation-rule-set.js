import npm      from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'
import babel    from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  format: 'umd',
  moduleName: 'validation_rule_set',
  sourceMap: true,
  plugins: [
    npm({ jsnext: true }), // npmモジュールを`node_modules`から読み込む
    commonjs(), // CommonJSモジュールをES6に変換
    babel({
      babelrc: false,
      presets: ["es2015-rollup"]
    }),
  ]
}
