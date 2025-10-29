const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './index.web.js',
    mode: process.env.NODE_ENV || 'development',
    output: {
        path: path.resolve( __dirname, 'web-build' ),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@react-native/babel-preset' ],
                        plugins: [
                            [ '@babel/plugin-transform-class-properties', { loose: true } ],
                            [ '@babel/plugin-transform-private-methods', { loose: true } ],
                            [
                                '@babel/plugin-transform-private-property-in-object',
                                { loose: true },
                            ],
                        ],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        alias: {
            'react-native$': 'react-native-web',
        },
        extensions: [ '.web.js', '.js', '.jsx', '.ts', '.tsx', '.json' ],
        mainFields: [ 'module', 'main', 'browser' ],
        fullySpecified: false,
    },
    ignoreWarnings: [
        /export 'findDOMNode'/,
        /export 'hydrate'/,
        /export 'render'/,
        /export 'unmountComponentAtNode'/,
    ],
    plugins: [
        new HtmlWebpackPlugin( {
            template: './index.html',
            inject: true,
        } ),
    ],
    devServer: {
        static: {
            directory: path.join( __dirname, 'public' ),
        },
        compress: true,
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
        allowedHosts: 'all',
    },
};
