
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

//webpack plugins production
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

// archivo de configuracion webpack 
module.exports = {
    mode : 'production',

    output:{
        clean: true,
        filename: 'main.[contenthash].js'
    },
   
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:{
                    sources: false,
                    minimize: false // html minimizado = true
                }
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]

            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
        
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css', //[name].[fullhash].css para versiones 
            ignoreOrder: false
        }),
        new CopyPlugin({
           patterns : [
             { from: 'src/assets/', to: 'assets/'}
           ]
        }),
    ]
}