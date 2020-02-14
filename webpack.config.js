const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "css-loader" }]
      },
      {
        test: /\.(jpg|svg|md)$/,
        exclude: /node_modules/,
        use: [{ loader: "file-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};