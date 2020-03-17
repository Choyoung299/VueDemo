module.exports = {
    //基本路径
    publicPath: './',

    //输出文件目录
    outputDir: 'dist',

    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',

    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: true,
    },

    devServer: {
        host: 'localhost',
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
        port: 8099,
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }, // 配置多个代理

    },
}