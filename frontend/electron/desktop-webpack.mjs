import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import base from "../webpack.config.js";

export default (_env, argv) => {
  const common = base({}, argv);
  return {
    mode: "production",
    entry: "./src/pages/desktop/entry.tsx",
    module: common.module,
    resolve: common.resolve,
    devtool: false,
    output: {
      path: path.resolve("dist-desktop/renderer"),
      filename: "shell.js",
      publicPath: "knot://app/",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./electron/local.html" }),
      ...common.plugins.filter((p) => p.constructor.name === "DefinePlugin"),
    ],
    performance: { hints: false },
  };
};
