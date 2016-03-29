// ------- WEBPACK DEV CONFIG -------

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',

    entry: [
        'webpack/hot/only-dev-server',
        './src/entry.js'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            { test: /\.jsx$/,
                loader: 'react-hot!babel',
                include: path.join(__dirname, 'src')
            },
            { test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/

            },
            { test: /\.scss?$/,
                loader: 'style!css!sass',
                include: path.join(__dirname, 'css')
            },
            { test: /\.css$/,
                loader: 'style!css' }
        ]
    }
};
