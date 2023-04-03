const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  watch: true,
  entry: [
    __dirname + '/src/js/script.js',
    __dirname + '/src/sass/style.sass'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/script.min.js',
  },
  module: {
   rules: [

     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: [],
     },

     {
       test: /\.s[ac]ss$/i,
       exclude: /node_modules/,
       use: [
         {
             loader: 'file-loader',
             options: { outputPath: 'css/', name: '[name].min.css'}
         },
         'sass-loader'
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
        // { from: path.resolve(__dirname, 'src/js/bootstrap-5.3.0.min.js'), to: path.resolve(__dirname, 'dist/js'), noErrorOnMissing: true },
      ],
    }),
  ],
};
