let mode = "development"
const path = require("path")
const minCssExtractPlugin = require("mini-css-extract-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

let target = "web"

if (process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browserslist"
}
module.exports = {
  mode: mode,
  target: target,
  entry: {
    index: "./src/index.js",
    // another: "./src/another-module.js",
  },
  output: {
    // filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: minCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new minCssExtractPlugin(),
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
}
