
# 本demo主要提供小程序增强相关的使用

安装最新版本chameleon-tool 

```
npm i chameleon-tool@1.0.5 -g
```

## 配置能力

主要包括以下四个方面：

* 工程配置能力
* 全局配置能力
* 页面配置能力
* Sitemap.json 配置能力

### [工程配置能力](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)

[微信-project.config.json](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)

[百度-project.swan.json](https://smartprogram.baidu.com/docs/develop/devtools/editor_set/)

[qq-小程序-project.config.json]

[tt小程序-project.config.json]

[alipay小程序-暂未找到对应配置]

### [全局配置能力](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)

以下全局配置能力开发者需要查对应官网看是否支持，这里我们做一个简单总结，如有不对，欢迎指出。

这些全局配置能力，只要对应小程序端支持，那么CML写"是"的那栏就表示该端小程序是可以运行的；

| 配置项                         | 描述                                                         | wx   | Qq   | alipay                                                     | Baidu | Tt   | CML  |
| ------------------------------ | ------------------------------------------------------------ | ---- | ---- | ---------------------------------------------------------- | ----- | ---- | ---- |
| pages                          | 页面路径列表                                                 | 是   | 是   | 是                                                         | 是    | 是   | 是   |
| window                         | 全局的默认窗口表现                                           | 是   | 是   | 是                                                         | 是    | 是   | 是   |
| tabbar                         | 底部tab栏的表现                                              | 是   | 是   | 是                                                         | 是    | 是   | 是   |
| debug                          | 可以在开发者工具中开启 `debug` 模式                          | 是   | 是   | 否                                                         | 否    | 否   | 是   |
| subpackages                    | 分包加载                                                     | 是   | 是   | 是                                                         | 是    | 否   | 是   |
| preloadRule                    | 分包预加载                                                   | 是   | 是   | 是                                                         | 是    | 否   | 是   |
| workers                        | 处理多线程任务                                               | 是   | 是   | 否                                                         | 否    | 否   | 是   |
| requiredBackgroundModes        | 申明需要后台运行的能力，类型为数组。                         | 是   | 是   | 是                                                         | 是    | 否   | 是   |
| plugins                        | 声明小程序需要使用的[插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html) | 是   | 否   | [是](https://opendocs.alipay.com/mini/plugin/plugin-usage) | 否    | 否   |      |
| resizable                      | 在 iPad 上运行的小程序可以设置支持[屏幕旋转](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)。 | 是   | 否   | 否                                                         | 否    | 否   |      |
| navigateToMiniProgramAppIdList | 跳转其他小程序                                               | 是   | 是   | 否                                                         | 否    | 是   |      |
| permission                     | 小程序[接口权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)相关设置。 | 是   | 是   | 否                                                         | 否    | 是   | 是   |
| usingComponents                | 在app.json中声明的组件为全局组件，其他页面可以直接用         | 是   | 否   | 否                                                         | 否    | 否   |      |
| entranceDeclare                | 聊天位置消息用打车类小程序打开，[详情参考](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/location-message.html) | 是   | 否   | 否                                                         | 否    | 否   |      |

### 

### [sitemap.json 配置能力](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html)

### 生命周期能力

具体的对应关系可以参考[这里](https://github.com/chameleon-team/chameleon-runtime/blob/master/src/platform/common/util/lifecycle.js)

对应各端的生命周期，开发者可以参阅对应的文档。

[微信小程序应用生命周期](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html)

[支付宝应用生命周期](https://opendocs.alipay.com/mini/framework/app-detail)

[百度小程序应用生命周期](https://smartprogram.baidu.com/docs/develop/tutorial/processjs/)

#### 应用生命周期-CML对应各端

| 应用生命周期/CML | web/weex         | wx       | alipay   | baidu    | Qq       |
| ---------------- | ---------------- | -------- | -------- | -------- | -------- |
| 'beforeCreate',  | 'beforeCreate',  | onLaunch | onLaunch | onLaunch | onLaunch |
| 'created',       | 'created',       | onLaunch | onLaunch | onLaunch | onLaunch |
| 'beforeMount',   | 'beforeMount',   | onLaunch | onLaunch | onLaunch | onLaunch |
| 'mounted',       | 'mounted',       | onShow   | onShow   | onShow   | onShow   |
| 'beforeDestroy', | 'beforeDestroy', | onHide   | onHide   | onHide   | onHide   |
| 'destroyed'      | 'destroyed'      | onHide   | onHide   | onHide   | onHide   |



#### 页面生命周期-CML对应各端

[页面配置能力](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)

| 页面生命周期/CML | 支付宝           | wx       | alipay   | baidu    | Qq       |
| ---------------- | ---------------- | -------- | -------- | -------- | -------- |
| 'beforeCreate',  | 'beforeCreate',  | onLoad   | onLoad   | onLoad   | onLoad   |
| 'created',       | 'created',       | onLoad   | onLoad   | onLoad   | onLoad   |
| 'beforeMount',   | 'beforeMount',   | onLoad   | onLoad   | onLoad   | onLoad   |
| 'mounted',       | 'mounted',       | onReady  | onReady  | onReady  | onReady  |
| 'beforeDestroy', | 'beforeDestroy', | onUnload | onUnload | onUnload | onUnload |
| 'destroyed'      | 'destroyed'      | onUnload | onUnload | onUnload | onUnload |

#### 组件生命周期-CML对应各端

| 组件生命周期/CML | Web/weex         | wx       | alipay     | baidu    | Qq       |
| ---------------- | ---------------- | -------- | ---------- | -------- | -------- |
| 'beforeCreate',  | 'beforeCreate',  | created  | didMount   | created  | created  |
| 'created',       | 'created',       | attached | didMount   | attached | attached |
| 'beforeMount',   | 'beforeMount',   | attached | didMount   | attached | attached |
| 'mounted',       | 'mounted',       | ready    | didMount   | ready    | ready    |
| 'beforeDestroy', | 'beforeDestroy', | detached | didUnmount | detached | detached |
| 'destroyed'      | 'destroyed'      | detached | didUnmount | detached | detached |



## API能力、UI能力

api.cml 提供测试用例
ui.cml 提供测试用例

