const paths = require('./paths')

module.exports = {
	mode: "development",
	entry: [paths.indexts],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: paths.dist,
		compress: false,
		port: 8080,
		historyApiFallback: true
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: [{
				loader: 'ts-loader',
				options: {
					configFile: paths.tsconfig
				}
			}],
			exclude: /node_modules/
		}]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		path: paths.dist,
		filename: paths.jsoutput
	},
}