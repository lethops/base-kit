const path = require("path");
const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const common = require("./webpack.core.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    overlay: true,
    open: true,
    stats: "errors-only"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../public", "index.html")
    })
  ],
});
