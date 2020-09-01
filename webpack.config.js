const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
  PUBLIC: path.resolve(__dirname, 'public'),
};

module.exports = {
  // may need to change to app.ts, when you convert over?
  // entry: ['whatwg-fetch', path.join(paths.JS, 'app.js')],
  entry: ['whatwg-fetch', path.join(paths.JS, 'app.tsx')],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'),
  ],
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // use: ["babel-loader"],
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      // added for typescript:
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },

      // added:
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['src/js', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      // for shorter import references
      assets: path.resolve(paths.PUBLIC, 'assets'),
      components: path.resolve(paths.JS, 'components'),
      utils: path.resolve(paths.JS, 'components', 'utils'), // remove later?
    },
  },
  // addition - add source-map support
  devtool: 'source-map',
};
