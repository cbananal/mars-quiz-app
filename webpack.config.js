
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
    devtool: '#source-map',

    //Poll 2000: update your webpack config with this to prevent your CPU from melting!
    //Compress:true - Using webpack to import bg images via your scss files? You get free ​gzip compression*!
    devServer: {
      watch:true,
      inline: true,
      host: '0.0.0.0',
      port: '3000',
      watchOptions: {
            aggregateTimeout: 300,
            // poll: true
            poll:2000,
      compress: true
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
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader",
            },
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
