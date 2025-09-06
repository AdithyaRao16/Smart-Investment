const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  
  transpileDependencies: [
    ],
  
  
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  
 
  devServer: {
    port: 8080,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  },
  
  
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  },
  
 
  chainWebpack: config => {
    
    config.module
      .rule('js')
      .include.add(require('path').resolve(__dirname, 'src')).end()
      .use('babel-loader')
      .loader('babel-loader')
  },
  
  
  lintOnSave: false,
  
  
  productionSourceMap: false
})