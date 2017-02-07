var webpack = require('webpack');


module.exports = function (config) {
    config.set({
        basePath : __dirname + '/',
        browsers: ['Chrome'],
        singleRun: false,
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        reporters: ['dots'],
        webpack: {
            module: {
                loaders: [
                    {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
                    {
                        test: /\.scss$/,
                        exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
                        loaders: [
                            'style?sourceMap',
                            'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap',
                            'postcss',
                            'sass'
                        ]
                    }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};