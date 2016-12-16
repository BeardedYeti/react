const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: 'src/index.js', // Entry
	output: {
		path: __dirname, //output
		filename: 'bundle.js',
		publicPath: '/src/assets/'
	},
	module: {
		loaders: [ // Helps load/import multiple types of files into browser useable formats
			{
				test: /\.jsx?$/, 
				loaders: 'babel-loader',
				include: path.join(__dirname, 'src'),
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.css$/, loaders: ['style', 'css?sourceMap']
			}
		]
	},
};