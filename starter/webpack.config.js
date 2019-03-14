const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
  //  the entry property is where webpack starts looking for all of the dependencies that it needs to bundle together (you can specify multiple files if you want)
    //  ./ means go to current folder
module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],

    //the output property tells weback where to save the bundle file
    output: {
        // absolute path = '/Users/nicolasries/web_dev/9-forkify/starter'
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },

    //the root folder from which the server will run
    devServer: {
        contentBase: './dist'
    },
    plugins: [
         new HtmlWebpackPlugin({
             filename: 'index.html',
            template: './src/index.html'
        })
     ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};