var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require("html-webpack-plugin");
var pkg = require("./package.json");

var env = "dev"; //dev开发环境 pro生产环境

module.exports = {
    entry: {
        weixin: "./src/js/weixin.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: `js/[name].${pkg.version}.min.js?[chunkhash:8]`
    },
    module: {
        rules: [
           {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            title: "微信JSAPI演示",
            inject: "head",
            template: "./src/pages/index.html"
        })
    ],
    devtool: '#eval-source-map',
    externals:{
        jquery: 'window.jQuery'
    }
}


if (env === 'pro') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
            }
        })
    ])
}
