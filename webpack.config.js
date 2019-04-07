const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle-[hash].js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ path: path.join(__dirname, "dist") }),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
  devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: 8080,
    compress: true
  }
};
