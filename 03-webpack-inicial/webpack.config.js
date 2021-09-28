
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// archivo de configuracion webpack 
module.exports = {
    mode : 'development',

    output:{
        clean: true
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

            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
        
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
    ]
}