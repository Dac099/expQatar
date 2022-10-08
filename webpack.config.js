const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {  
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/views/landing.pug', filename: 'landing.pug'}),
    new HtmlWebpackPlugin({ template: './src/views/signin-signup.pug',  filename: 'signin-signup.pug'}),
    new HtmlWebpackPugPlugin()
  ],

  devServer: {
    watchFiles: ['./src/views/*.pug', './src/scss/*.scss'],
    port: 8080,
    
  },

  mode: 'development'
}