
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const wxProjectConfig = {
  // "miniprogramRoot": "miniprogram/",
  "pluginRoot": "plugin/",
  "compileType": "plugin",
  "setting": {
    "newFeature": true
  },
  "appid": "touristappid",
  "projectname": "minicode-4",
  "libVersion": "2.2.0",
  "simulatorType": "wechat",
  "simulatorPluginLibVersion": {},
  "condition": {}
}
const ttProjectConfig = {
  "setting": {
      "urlCheck": false,
      "es6": false,
      "postcss": true,
      "minified": true,
      "newFeature": true
  },
  "appid": "testappId",
  "projectname": "tt的小程序"
}
cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex","wx"],
  enableGlobalCheck: false,
  enableLinter: false,
  buildInfo: {
    wxAppId: 'touristappid'
  },
  wx: {
    dev: {
      projectConfig:wxProjectConfig
    },
    build: {
      apiPrefix,
      projectConfig:wxProjectConfig
    }
  },
  tt: {
    dev: {
      projectConfig:ttProjectConfig
    },
    build: {
      apiPrefix,
      projectConfig:ttProjectConfig
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
      apiPrefix
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
})

