const path = require("path");

module.exports = {
  entry: "./dist/index.js",
  output: {
    path: path.resolve(__dirname, "out/js"),
    filename: "app.js",
  },
  resolve: {
    alias: {
      App: path.join(__dirname, "dist", "App"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
