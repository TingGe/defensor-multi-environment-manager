const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    popup: path.join(__dirname, "src/popup/index.tsx"),
    options: path.join(__dirname, "src/options/index.tsx"),
    contentScripts: path.join(__dirname, "src/content_scripts/index.ts"),
    inject: path.join(__dirname, "src/content_scripts/inject.ts")
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  output: {
    path: path.join(__dirname, "multi-env-switch/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
