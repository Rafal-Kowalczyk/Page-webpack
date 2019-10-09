const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    mode: 'development',
    output: {
        filename:'js/[name].js',
        path: path.resolve(__dirname, 'build'),
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
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: 'file-loader',
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