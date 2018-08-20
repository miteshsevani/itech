const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.php$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.php",
      filename: "./index.php"
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css'
    })
  ]  
};