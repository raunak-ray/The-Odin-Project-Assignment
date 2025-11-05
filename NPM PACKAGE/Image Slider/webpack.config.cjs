const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/script.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.html$/i, loader: "html-loader" },
      { test: /\.(jpg|jpeg|png|svg)$/i, type: "asset/resource" },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["./src/**/*"],
    hot: true,
    open: true,
  },
};
