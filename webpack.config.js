const webpack = require("webpack");
const path = require("path");
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'app');
const indexPath = path.resolve(__dirname, 'app', 'CompanyIndex.tsx');
const tsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const config = {
    devtool: 'source-map',
    entry: indexPath,
    output: { path: buildPath, filename: 'build/bundle.js' },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
        plugins: [ new tsconfigPathsPlugin() ]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: [nodeModulesPath]
            }
        ]
    },
	devServer: {
		contentBase: path.resolve(__dirname, './app'),
		publicPath: '/',
		hot: true,
		overlay: true,
		historyApiFallback: true,
    },
    mode: 'development'
}
module.exports = config;