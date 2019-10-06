const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js',
        publicPath: '/'
     },
     devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../', 'public'),
        port: 3002
     },
     module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
     },

     plugins:[
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
             template: './index.html'
         }),
     ]
};