---
```
npm i @didi/chameleon-cli@6.0.8 -g
```

## 本阶段核心目标：提供仅支持小程序的增强型跨端能力
http://wiki.intra.xiaojukeji.com/pages/viewpage.action?pageId=322236532

Key Result 2.2：CML能力对齐MPX

Key Result 2.2：提供只跨小程序解决方案：API能力、模板能力、生命周期能力均达到80%以上；

Key Result 2.3：增强小程序端配置能力：全局配置、页面配置、组件配置 等配置能力达到85%以上

工程化能力@王梦君

配置能力@王梦君(全局配置、页面配置、组件配置，部分配置需要运行时支持@罗欢)

模板编译能力@王梦君

API能力@高星辰

组件能力@高星辰

运行时能力@罗欢

## 配置能力@王梦君

app.cml 提供所有全局配置能力测试
page.cml 提供页面的配置能力

### 全局配置能力

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



## API能力、UI能力@高星辰

api.cml 提供测试用例
ui.cml 提供测试用例

