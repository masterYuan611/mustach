const path = require("path");

module.exports = {
  // 模式
  mode: "development",
  // 入口
  entry: "./src/index.js",
  // 打包到什么文件
  output: {
    filename: "bundle.js",
  },
  // 配置webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, "www"),
    compress: false,
    port: 8082,
    // 虚拟打包的路径，bundle.js文件没有真正的生成
    publicPath: "/xuni/",
  },
};
