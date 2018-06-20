const path = require('path'),
     ExtractTextPlugin = require('extract-text-webpack-plugin'),
     CleanWebpackPlugin = require('clean-webpack-plugin'),
     HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        //publicPath : 'dist' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })         
            },{
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name : '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: false, 
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            path:'../'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}