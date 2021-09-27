
const HtmlWebPackPlugin = require('html-webpack-plugin');
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
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
        
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),
    ]
}