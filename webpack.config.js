const path = require('path');

module.exports = {

  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test:/\.(woff|woff2|eot|ttf|otf|rtf)$/i,
        type: 'asset/resource',
      }
    ],
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

};

