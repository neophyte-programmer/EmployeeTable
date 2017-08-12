const path = require('path');
const webpack = require('webpack');

const config = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
    entry: [
      'eventsource-polyfill', 
      'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
      './src/index.js'
    ],
    output: {
        //path: path.resolve('./dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
      path: __dirname + '/dist',

        filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'react']
                }
            },
            {
              test: /(\.css)$/, loaders: ['style', 'css']
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}]
    }
};

module.exports = config;
