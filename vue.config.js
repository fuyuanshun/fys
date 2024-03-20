const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  //入口文件配置
  pages:{
    index:{
      entry:'src/main.js'
    }
  },
  // devServer:{
  //   proxy: {
  //     '/search':{
  //       target:'https://api.github.com/'
  //     }
  //   }
  // }
})
