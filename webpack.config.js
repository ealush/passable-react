const path = require('path'),
    webpack = require('webpack'),
    TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: `${__dirname}/src/index.js`,
    devtool: 'source-map',
    externals: {
        'react': 'react',
        'passable': 'passable'
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'passable-provider.js',
        library: 'PassableProvider',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new TerserPlugin({ sourceMap: true })
    ]
};