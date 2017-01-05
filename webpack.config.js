var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
		app: './src/index.js'
	},
	output: {
		path: 'dist',
		filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
	},
	devtool: 'source-map',	
	plugins: [
		require('autoprefixer'), //this is for PostCSS to do its magic making CSS prefixes for browsers automatic
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new ExtractTextPlugin("styles.css"),
		new HtmlWebpackPlugin({
			filename: 'quiz.html',
			template: 'src/quiz.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html'
		})
		
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:{
					presets:['es2015', 'react', 'stage-0'] //Stage 0 lets us use ES7 stuff like object spread operator
				}
			},
		    {
				test: /\.(jpg|png|svg)$/,
				loader: 'file?name=media/[name].[ext]'
		    },
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
			},
      		{ 
      			test: /\.css$/, 
      			loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
      		},
      		{
		        test: /\.html$/,
		        loader: 'html'
		    }
		]
	}
	


}
