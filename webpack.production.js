const path = require('path');
const wepack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebPackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebPackPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
   optimization: {
       minimizer: [new TerserWebPackPlugin({}), new OptimizeCssAssetsWebPackPlugin({})]
   },


    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, './dist'),
    //     publicPath: ''
    // },

    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },

            {test: /\.hbs$/, use: 'handlebars-loader'}

        ]

    },
    plugins: [
        new HtmlWebPackPlugin({
            title:'Natural Language Processing',
            description: 'NLP',
            template:'./src/views/index.hbs',
            filename: './index.html',
        }),

        new MiniCssExtractPlugin({filename: '[name].css'})
    ]


}