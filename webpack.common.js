const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        }
      }
    }
  },
  entry: {
    index: './src/index.js',
  },
  resolve: {
    alias: {
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
};