const path = require('path'),
    webpack = require('webpack'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
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
        loaders: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new UglifyJSPlugin({sourceMap: true})
    ]
};