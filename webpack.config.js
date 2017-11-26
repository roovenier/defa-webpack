const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

let config = {
  entry: './src/scripts/index.js',
  devtool: 'source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/scripts')
	},
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'public'))
  ]
};

if(isProduction) {
  config.devtool = '';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config;
