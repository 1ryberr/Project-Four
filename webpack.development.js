const path = require('path');
const wepack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
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
        })
    ]


}