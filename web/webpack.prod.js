const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlInlineScriptPlugin({
      scriptMatchPattern: [/index[.]js$/],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        // terserOptions: {
        //   format: {
        //     comments: false,
        //   },
        // },
      }),
    ],
  },
});