
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        main: './src/main.jsx'
    },
    output: {
        filename: '[name].js',
        publicPath: '/build/',
        path: path.join(__dirname, 'build/')
    },
    // devtool: '#source-map',
    devServer: { //update your webpack config with this to prevent your cpu from melting!
      watch:true,
      inline: true,
      host: '0.0.0.0',
      port: '3000',
      watchOptions: {
            aggregateTimeout: 300,
            // poll: true
            poll:2000
      }
    },
    module: {
         loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
