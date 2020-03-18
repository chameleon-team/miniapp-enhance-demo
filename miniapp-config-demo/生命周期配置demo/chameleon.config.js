
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const webpack = require('webpack');
cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex","wx","alipay","baidu"],
  buildInfo: {
    wxAppId: '123456'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix,
      minimize:false,
      moduleIdType:'name',
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix,
      // minimize:false,//这个可以分析每个资源的大小；
      moduleIdType:'name'
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
});

cml.utils.plugin('webpackConfig', function(params) {
  let { type, media, webpackConfig } = params
  if (type === 'wx' || type === 'alipay' || type === 'baidu') {
    let index  = webpackConfig.plugins.findIndex(item => item.constructor.name === 'CommonsChunkPlugin')
    webpackConfig.plugins.splice(index, 1)
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: ['common', 'manifest'],
        filename: 'static/js/[name].js',
        minChunks: function(module, count){
          //这里写控制 模块的逻辑；根据模块的路径判断这个模块是否要打到 dist/wx/static/js/common.js
          if(module.resource && /subpage2/.test(module.resource)){
            return false;
          }
          return count >=2;
        }
      })
    )
  }
  return { type, media, webpackConfig }
})

