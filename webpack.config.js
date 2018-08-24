const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const routes = ['index', 'new', 'show', 'ask', 'jobs'];

const plugins = routes.map(route =>
  new HtmlWebPackPlugin({
    template: "./src/" + route + ".pug",
    filename: "./" + route + ".html",
    inject: false
  })
);

plugins.push( new CopyWebpackPlugin([
  { from: 'assets', to: 'assets' }
]));

module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      }
    ]
  },
  plugins: plugins
};
