const webpack = require('webpack')
const path = require('path')
const readFileSync = require('fs').readFileSync

const isProduction = process.argv.indexOf('-p') >= 0
const sourcePath = path.join(__dirname, '../')
const outPath = path.join(sourcePath, '/dist')
const headIcons = readFileSync(path.join(sourcePath, 'assets/icons/index.html'))

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    context: sourcePath,
    entry: {
        app: './src/app/index.tsx',
        react: [
            'react-dom',
            'react',
            'react-router',
            'react-redux',
            'styled-components'
        ]
    },
    output: {
        path: outPath,
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/'
    },
    performance: {
        hints: false,
        // hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    enforce: true,
                    test (module, chunks) {
                        const name = module.nameForCondition && module.nameForCondition()
                        return chunks.some(chunk => {
                            return chunk.name === 'app' && /[\\/]node_modules[\\/]/.test(name)
                        })
                    }
                },
                react: {
                    name: 'react',
                    chunks: 'all',
                    priority: 2,
                    enforce: true,
                    test (module, chunks) {
                        return chunks.some(chunk => chunk.name === 'react')
                    }
                }
                // vendor: {
                //      test: /[\\/]node_modules[\\/]/,
                //      name: "vendors",
                //      priority: -20,
                //      chunks: "all"
                //  }
            }
        },
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // (jsnext:main directs not usually distributable es6 format, but es6 sources)
        mainFields: ['module', 'browser', 'main']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: isProduction
                    ? 'awesome-typescript-loader'
                    : ['babel-loader?plugins=react-hot-loader/babel', 'awesome-typescript-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            },
        ]
    },
    plugins: [
        new ManifestPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false
        }),
        new WebpackCleanupPlugin({
            exclude: [
                'posts/**/*.json'
            ]
        }),
        new HtmlWebpackPlugin({
            template: 'src/app/html/index.html',
            head: headIcons,
        }),
        new CopyWebpackPlugin([
            {
                from: 'assets/**/*',
                to: '',
                ignore: ['*.html', '*.json']
            },
            {
                from: 'build/static/posts',
                to: 'posts/',
                toType: 'dir',
                ignore: ['*.json']
            }
        ]),
        new UglifyJsPlugin({
            parallel: true,
            cache: true,
            // http://lisperator.net/uglifyjs/compress
            uglifyOptions: {
                ie8: false,
                compress: {
                    dead_code: true,
                    global_defs: {
                        DEBUG: false
                    }
                },
                output: {
                    comments: false,
                    beautify: false
                }
            }
        }),
        //'../../build/static/posts/
        new webpack.ContextReplacementPlugin(
            /build\/static\/posts/,
            new RegExp('^\\./.*\\.json$')
        ),
        // new BundleAnalyzerPlugin({})
    ],
    devServer: {
        open: false,
        contentBase: sourcePath,
        hot: true,
        inline: true,
        historyApiFallback: {
            disableDotRule: true
        },
        stats: 'minimal'
    },
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty',
        __dirname: true
    }
}
