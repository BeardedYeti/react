/* Development Config */

import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import { APP_PATH } from './webpack.paths.config';

const DEV_CONFIG = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: APP_PATH,
				use: [
					'react-hot-loader'
				]
			}
		]
	},
	devServer: {
		hot: true,
		port: 8080,
		inline: true,
		host: '0.0.0.0',
		historyApiFallback: true,
		stats: {
			assets: true,
			timings: true,
			chunks: false,
			children: false
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			title: 'React Application',
			template: 'index.ejs'
		})
	]
};

export default DEV_CONFIG;
