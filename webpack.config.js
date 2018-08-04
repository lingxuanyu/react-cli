const path = require("path")
const webpack = require("webpack")
const cleanWebpackPlugin = require("clean-webpack-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode:"development",

    entry:["./index.js", "react-hot-loader/patch"],

    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist")
    },

    devServer:{
        port:8888,
        hot:true,
        inline:true
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
                // use:[miniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                options: {
                    presets: ["env", "react","stage-0"],
                    plugins:["react-hot-loader/babel","babel-plugin-transform-decorators-legacy"]
                  }
            },
            {
                test:/\.(jpe?g|png|icon|gif|svg)$/,
                loader:"url-loader",
                options:{
                    name:"[name][hash:5].[ext]",
                    outputPath:"img/",
                    limit:10
                }
            }
        ]
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(),

        new htmlWebpackPlugin({
            template:"./index.html",
            title: "凌轩宇",
            filename: "index.html",
            minify:{
                collapseBooleanAttributes:true
            }
        }),

        new cleanWebpackPlugin(['./dist']),

        new miniCssExtractPlugin({
            filename:"[name].[hash:6].css"
        })
    ]
    
}