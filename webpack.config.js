const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'rb-navbar',
    libraryTarget: 'umd',
    pathinfo: true,
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react', 'flow', 'stage-2'],
      },
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
      }],
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ],
    }, {
      test: /\.(ttf)$/,
      loader: 'url-loader',
      options: {
        limit: 50000,
        mimetype: 'application/font-ttf',
        name: 'fonts/[name].[ext]',
      },
    }, {
      test: /\.(eot)$/,
      loader: 'url-loader',
      options: {
        limit: 50000,
        mimetype: 'application/font-eot',
        name: 'fonts/[name].[ext]',
      },
    }, {
      test: /\.(svg)$/,
      loader: 'url-loader',
      options: {
        limit: 50000,
        mimetype: 'application/font-svg',
        name: 'fonts/[name].[ext]',
      },
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader',
      options: {
        limit: 50000,
        mimetype: 'application/font-woff',
        name: 'fonts/[name].[ext]',
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devtool: 'source-map',
  target: 'web',
};
