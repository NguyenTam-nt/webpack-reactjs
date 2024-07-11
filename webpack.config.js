let mode = "development"
const minCssExtractPlugin = require("mini-css-extract-plugin")

let target = "web"

if (process.env.NODE_ENV === "production") {
  mode = "production"
  target = "browserslist"
}
module.exports = {
  mode: mode,
  target: target,
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          minCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new minCssExtractPlugin()],
  devtool: "source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
}
