const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    // baseUrl: './',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'api': '@/api',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'utils': '@/utils'
            }
        },
        
        
    },
    css: {
        // 是否开启css分离 在开发环境开启会导致热更新异常
        extract: isProduction,
        // 在浏览器审查时是否显示当前css文件路径 开发环境建议开启 不影响热更新
        sourceMap: true, 
      },
      
      // 生产环境是否生成sourceMap文件
      productionSourceMap: false,

    devServer: {
        hot: true,
        open: true,
        port: 8080,
        host: "localhost"
    }
 
}