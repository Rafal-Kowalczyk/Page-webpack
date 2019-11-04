const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../', 'build'),
        filename: 'js/[name]-[contenthash:5].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[contenthash:5].[ext]',
                            outputPath: 'images',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 70
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", {
                            useBuiltIns: 'usage',
                            corejs: "2.0.0"
                        }]
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash:5].css'
        }),
        new CopyPlugin(
            [{
                from: 'public/images',
                to: 'images'
            }]
        )
    ]
};