const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATH_BUILD  = path.join(__dirname, '/dist');
const PATH_SOURCE  = path.join(__dirname, '/src');

module.exports = {
    entry: {
        index: PATH_SOURCE + '/index.js'
    },
    output:{
        path: PATH_BUILD,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            'transform-class-properties'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ] 
}