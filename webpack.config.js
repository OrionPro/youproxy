const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const fonts = require('./webpack/fonts');
const js = require('./webpack/js');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const sprite = require('./webpack/sprite');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'proxi-by-country': PATHS.source + '/pages/proxi-by-country/proxi-by-country.js',
			'feed-back': PATHS.source + '/pages/feed-back/feed-back.js',
			'FAQ': PATHS.source + '/pages/FAQ/FAQ.js',
			'personal-cabinet': PATHS.source + '/pages/personal-cabinet/personal-cabinet.js',
			'success-payment': PATHS.source + '/pages/success-payment/success-payment.js',
			'unsuccess-mail': PATHS.source + '/pages/unsuccess-mail/unsuccess-mail.js',
			'enter-to-personal': PATHS.source + '/pages/enter-to-personal/enter-to-personal.js',
			'recovery-password': PATHS.source + '/pages/recovery-password/recovery-password.js',
			'404': PATHS.source + '/pages/404/404.js',
			'contacts': PATHS.source + '/pages/contacts/contacts.js',
			'purchase_by_the_piece': PATHS.source + '/pages/purchase_by_the_piece/purchase_by_the_piece.js',

		},
		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},
		externals: {
			'jquery-mousewheel': 'jquery-mousewheel',
			'../TweenLite': 'TweenLite',
		},
		resolve: {
			modules: ["node_modules", "source"],
			alias: {
				'sprite': path.resolve(__dirname, 'source/spritesmith/'),
				'img': path.resolve(__dirname, 'source/img/'),
				'fonts': path.resolve(__dirname, 'source/fonts/'),
				'sass': path.resolve(__dirname, 'source/sass/')
			}
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'proxi-by-country.html',
				chunks: ['proxi-by-country', 'common'],
				template: PATHS.source + '/pages/proxi-by-country/proxi-by-country.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'FAQ.html',
				chunks: ['FAQ', 'common'],
				template: PATHS.source + '/pages/FAQ/FAQ.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'feed-back.html',
				chunks: ['feed-back', 'common'],
				template: PATHS.source + '/pages/feed-back/feed-back.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'personal-cabinet.html',
				chunks: ['personal-cabinet', 'common'],
				template: PATHS.source + '/pages/personal-cabinet/personal-cabinet.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'unsuccess-mail.html',
				chunks: ['unsuccess-mail', 'common'],
				template: PATHS.source + '/pages/unsuccess-mail/unsuccess-mail.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'success-payment.html',
				chunks: ['success-payment', 'common'],
				template: PATHS.source + '/pages/success-payment/success-payment.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'enter-to-personal.html',
				chunks: ['enter-to-personal', 'common'],
				template: PATHS.source + '/pages/enter-to-personal/enter-to-personal.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'recovery-password.html',
				chunks: ['recovery-password', 'common'],
				template: PATHS.source + '/pages/recovery-password/recovery-password.pug'
			}),
			new HtmlWebpackPlugin({
				filename: '404.html',
				chunks: ['404', 'common'],
				template: PATHS.source + '/pages/404/404.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				chunks: ['contacts', 'common'],
				template: PATHS.source + '/pages/contacts/contacts.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'purchase_by_the_piece.html',
				chunks: ['purchase_by_the_piece', 'common'],
				template: PATHS.source + '/pages/purchase_by_the_piece/purchase_by_the_piece.pug'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		]
	},
	pug(),
	sprite(),
	images(),
	fonts()
]);

module.exports = function(env) {
	if (env === 'production'){
		return merge([
			common,
			extractCSS(),
			uglifyJS(),
			js()
		]);
	}
	if (env === 'development'){
		return merge([
			common,
			js(),
			css(),
			sass(),
			devserver()
		]);
	}
};










