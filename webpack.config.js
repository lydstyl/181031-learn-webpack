const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// process.env.NODE_ENV = 'production';
const devMode = process.env.NODE_ENV !== 'production'
// let devMode = process.env.NODE_ENV !== 'production';
// devMode = true;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  mode: 'development'
};