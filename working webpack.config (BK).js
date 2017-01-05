var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
	},
	devtool: '#source-map',	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:{
					presets:['es2015', 'react', 'stage-0']
				}
			},
		    {
				test: /\.(jpg|png|svg)$/,
				loader: 'file?name=src/media/[name].[ext]'
		    },
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'postcss-loader','less-loader']
			},
      		{ 
      			test: /\.css$/, 
      			loader: 'style-loader!css-loader' 
      		}
		]
	}
	,
	plugins: [
		require('autoprefixer'),
		new ExtractTextPlugin("build/styles/styles.css")
	]

}
