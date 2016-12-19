const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');
const env = { dev: process.env.NODE_ENV };

const serverConfig = {
	contentBase: path.join(__dirname, '../../src/'),
	historyApiFallback: { disableDotRule: true },
};

const server = new webpackDevServer(webpack(webpackConfig(env)), serverConfig);
server.listen(3000, 'localhost');