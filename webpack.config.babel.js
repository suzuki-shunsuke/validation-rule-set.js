import path from 'path';
import webpack from 'webpack';

module.exports = [
  {
    // library
    entry: {
      'dist/validation-rule-set': './src/main.js',
    },
    externals: [{
      'validator': true,
    }],
    resolve: {
      modulesDirectories: ['node_modules'],
      root: [path.resolve('.'),],
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
    ],
    output: {
      path: path.join(__dirname),
      filename: '[name].umd.js',
      library: 'validation_rule_set',
      libraryTarget: 'umd'
    },
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      // loader: 'babel-loader',
      loader: 'babel',
      query: {
        preset: ['es2015'],
        // plugins: ['transform-runtime']
      }
    }]
  },
];
