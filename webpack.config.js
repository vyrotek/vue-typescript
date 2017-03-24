const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),

    entry: {
        app: ['./src/main.ts']
    },

    output: {
        path: './dist',
        filename: 'index.js'
    },

    resolve: {
        extensions: ['web_modules', '.ts', '.js'],
        alias: { 'vue$': 'vue/dist/vue.common.js' }
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },

    plugins: [
        // new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        new webpack.DefinePlugin({
            // 'process.env': {
            //     NODE_ENV: '"production"'
            // }
        })
    ]
}