const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: [
    __dirname + '/src/sass/style.sass'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'css/style.css',
  },
  module: {
   rules: [
     {
       test: /\.s[ac]ss$/i,
       use: [
         "style-loader",
         "css-loader",
         "sass-loader",
       ],
     },
   ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/css'), to: path.resolve(__dirname, 'dist/css'), noErrorOnMissing: true },
        { from: path.resolve(__dirname, 'src/font'), to: path.resolve(__dirname, 'dist/font'), noErrorOnMissing: true },
        { from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist/img'), noErrorOnMissing: true },
      ],
    }),
  ],
};
