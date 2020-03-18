
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const wxProjectConfig = {
  "setting": {
    "newFeature": true
  },
  "appid": "wx2dd60ffdc3f8f2bb",
	"projectname": "siteMap",
  "libVersion": "2.8.1",
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
//siteMap 仅支持微信小程序
let siteMap = {
  "desc": "测试sitemap配置",
  "rules": [{
    "action": "allow",
    "page": "*"
  }]
}
cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex","wx"],
  enableGlobalCheck: false,
  enableLinter: false,
  check: {
    enable: false,
  },
  buildInfo: {
    wxAppId: 'touristappid'
  },
  wx: {
    dev: {
      projectConfig:wxProjectConfig,
      siteMap:siteMap
    },
    build: {
      apiPrefix,
      projectConfig:wxProjectConfig,
      siteMap:siteMap
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

