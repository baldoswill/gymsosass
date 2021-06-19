const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "assets/scss"),
  entry: "./style.scss",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: ["url-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../assets/css/style.css",
    }),
  ],
};
