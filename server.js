import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackhotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

const bundler = weback(config);

// Listens and serves application from src folder
browserSync({
	port: 3000,
	ui: {
		port: 3001
	},
	server: {
		baseDir: 'src',
		middleware: [
			webpackDevMiddleware(bundler, {
				noInfo: false,
				quiet: false,
				stats: {
					assets: false,
					colors: ture,
					version: false,
					hash: false,
					timings: false,
					chunks: false,
					chuckModules: false
				}
			}),
			webpackhotMiddleware(bundler)
		]
	},
})