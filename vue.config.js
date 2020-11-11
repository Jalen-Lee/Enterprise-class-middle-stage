
const {resolve} = require('path')

const port = process.env.port || process.env.npm_config_port || 9527 //开发环境下的本地服务器端口

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    // devServer: {
    //     port: port,
    //     open: true,
    //     overlay: {
    //         warnings: false,
    //         errors: true
    //     },
    //     before: require('./mock/mock-server.js')
    // },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: "David企业级后台",
        resolve: {
            alias: {
                '@': resolve(__dirname,'src')
            }
        }
    },
}
