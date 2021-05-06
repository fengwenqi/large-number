'use strict'

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        'large-number': './src/index.js',
        'large-number.min': './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'largeNumber',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            })
        ]
    }
}
