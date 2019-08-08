const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src", "main.tsx")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    overlay: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: [/node_modules/],
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]_[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /.*\.(gif|png|jp(e*)g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  }
};
