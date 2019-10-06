const path = require('path');
const { CleanWebpackPligin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: ''
    },

    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'',
        publicPath: '/'
     },

     module:{
         rules:[]
     },

     plugins:[]
};