
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const wxProjectConfig = {
  "setting": {
    "newFeature": true
  },
  "cloudfunctionRoot": "cloudfunctions/",
  "appid": "wx2dd60ffdc3f8f2bb",
	"projectname": "chameleon-x-cloud",
  "libVersion": "2.8.1",
  "simulatorType": "wechat",
  "simulatorPluginLibVersion": {},
  "condition": {}
}
cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  enableLinter: false,
  platforms: ["web","weex","wx","alipay","baidu","qq"],
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

