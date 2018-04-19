// const genDefaultConfig = require('@storybook/react/dist/server/config/webpack.config.js').default
const CopyWebpackPlugin = require('copy-webpack-plugin')

// module.exports = (baseConfig, env) => {
// const config = genDefaultConfig(baseConfig, env)

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
    })
    defaultConfig.resolve.extensions.push('.ts', '.tsx')

    defaultConfig.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    })

    defaultConfig.plugins.push(
        new CopyWebpackPlugin([
            {
                from: 'assets/**/*',
                to: '',
            }
        ])
    )

    return defaultConfig
}
