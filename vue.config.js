const {resolve,join} = require('path')

//开发环境下的本地服务器端口
const port = process.env.port || 9527

//应用名
const name = 'vue-awesome-admin'

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: 9527,
        openPage: 'login',
        open: true,
        overlay: {
            warnings: true,
            errors: true
        },
        // compress:true,
        disableHostCheck:true,
        // before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve(__dirname,'src')
            },
        },
        devtool: 'source-map',
    },
    css: {
        loaderOptions: {
            sass: {
                // prependData: `
                //     @import '@/styles/variable.scss';
                //     @import '@/styles/mixins.scss';
                //     @import '@/styles/index.scss';
                //     @import '@/styles/transitions.scss';
                // `,
            },
        },
    },
}
