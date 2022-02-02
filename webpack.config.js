const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
      },
      { 
        test: /\.tsx?$/, 
        loader: 'ts-loader' 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};