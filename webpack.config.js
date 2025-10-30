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
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic',
                                },
                            ],
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                },
                            ],
                            [
                                '@babel/preset-typescript',
                                {
                                    allowNamespaces: true,
                                    allowDeclareFields: true,
                                },
                            ],
                        ],
                        plugins: [
                            [
                                'module-resolver',
                                {
                                    root: [ './' ],
                                    extensions: [
                                        '.ios.ts',
                                        '.android.ts',
                                        '.ts',
                                        '.ios.tsx',
                                        '.android.tsx',
                                        '.tsx',
                                        '.jsx',
                                        '.js',
                                        '.json',
                                    ],
                                    alias: {
                                        '@api': './src/api',
                                        '@assets': './src/assets',
                                        '@components': './src/components',
                                        '@constants': './src/constants',
                                        '@hooks': './src/hooks',
                                        '@navigation': './src/navigation',
                                        '@screens': './src/screens',
                                        '@services': './src/services',
                                        '@store': './src/store',
                                        '@utils': './src/utils',
                                    },
                                },
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
            'react-native-reanimated$': path.resolve( __dirname, 'src/utils/reanimated.web.js' ),
            'react-native-reanimated': path.resolve( __dirname, 'src/utils/reanimated.web.js' ),
            'react-native-gesture-handler$': path.resolve( __dirname, 'src/utils/gesture-handler.web.js' ),
            'react-native-gesture-handler': path.resolve( __dirname, 'src/utils/gesture-handler.web.js' ),
            'react-native-screens': path.resolve( __dirname, 'src/utils/screens.web.js' ),
            'react-native-screens$': path.resolve( __dirname, 'src/utils/screens.web.js' ),
            '@api': path.resolve( __dirname, 'src/api' ),
            '@assets': path.resolve( __dirname, 'src/assets' ),
            '@components': path.resolve( __dirname, 'src/components' ),
            '@constants': path.resolve( __dirname, 'src/constants' ),
            '@hooks': path.resolve( __dirname, 'src/hooks' ),
            '@navigation': path.resolve( __dirname, 'src/navigation' ),
            '@screens': path.resolve( __dirname, 'src/screens' ),
            '@services': path.resolve( __dirname, 'src/services' ),
            '@store': path.resolve( __dirname, 'src/store' ),
            '@utils': path.resolve( __dirname, 'src/utils' ),
        },
        extensions: [ '.web.js', '.js', '.jsx', '.ts', '.tsx', '.json' ],
        mainFields: [ 'module', 'main', 'browser' ],
        fullySpecified: false,
        fallback: {
            crypto: false,
            stream: false,
            buffer: false,
        },
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
