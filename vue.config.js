const {resolve,join} = require('path')
const port = process.env.port || process.env.npm_config_port || 9527 //开发环境下的本地服务器端口
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: 9527,
        // openPage: '/page',
        // open: true,
        // overlay: {
        //     warnings: false,
        //     errors: true
        // },
        // compress:true,
        disableHostCheck:true,
        // before: require('./mock/mock-server.js')
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: "David企业级后台",
        resolve: {
            alias: {
                '@': resolve(__dirname,'src')
            }
        },
        devtool: 'source-map',
        // devServer: {
        //
        //     // 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
        //     disableHostCheck: true
        // }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import '@/styles/variable.scss';
                    @import '@/styles/mixins.scss';
                    @import '@/styles/index.scss';
                    @import '@/styles/transitions.scss';
                `,
            },
        },
    },
}
