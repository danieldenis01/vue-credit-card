const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    payment: 'payment'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/index.js'),
    output: {
      filename: 'vuejs-credit-card.min.js',
      libraryTarget: 'window',
      library: 'vuejs-credit-card',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/components/Card.vue'),
    output: {
      filename: 'vuejs-credit-card.js',
      libraryTarget: 'umd',
      library: 'vuejs-credit-card',
      umdNamedDefine: true
    }
  })
];
