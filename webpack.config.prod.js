var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
  entry: {
    main: "./src/js/main.js",
    vendor: ["bootstrap"]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[chunkhash].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        })
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          inlineRequires: 'img',
          partialDirs: [
            path.resolve(__dirname, 'src', 'templates', 'components')
          ]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: '/img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'Tether'
    }),
    new ExtractTextPlugin({
      filename: "css/[hash].css"
    }),
    new HtmlWebpackPlugin({
      title: 'Home',
      filename: 'index.html',
      template: 'src/templates/layout/default.hbs',
      chunks: ['vendor', 'main']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ]
};
