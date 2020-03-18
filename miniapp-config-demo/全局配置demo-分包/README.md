## chameleon包体积优化

## 分包加载优化

**首先更新 chameleon-tool@1.0.4-alpha.1**

这个版本有以下优化
- 解决分包内组件js分包不彻底，优化包体积40%左右
- 支持原生小程序组件的导入也是函数式的
- 支持公用样式以文件的形式 @import,优化包体积10%左右

参考老爸商城的优化前后对比

优化前后体积对比如下

| 优化前                                                       | 优化后                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="https://static.didialift.com/pinche/gift/resource/sub-before-3d0bb5fe2ffeaecc1ec878fd718c4a76.PNG" style="width:300px;height:500px" /> | <img src="https://static.didialift.com/pinche/gift/resource/sub-after-c45c453130930502573207a6b6c6e4fb.PNG" style="width:300px;height:500px" /> |

### 0 理解微信小程序分包策略

比如生成的 app.json 中配置如下:

```javascript
{
  "pages":[
    "pages/index",
    "pages/logs"
  ],
  "subpackages": [
    {
      "root": "packageA",
      "pages": [
        "pages/cat",
        "pages/dog"
      ]
    }, {
      "root": "packageB",
      "name": "pack2",
      "pages": [
        "pages/apple",
        "pages/banana"
      ]
    }
  ]
}

```
* 小程序主包体积和分包体积的计算方式：
  - 所有在不在 packageA packageB 等分包目录下 中的体积才不会被计算到主包里；
  - packageA packageB 文件夹下的体积为对应的分包的体积
* 同时需要注意：
  - 主包不能引用分包的组件 
  - 分包可以引用主包的组件 
  - 分包不能引用分包的组件

了解了以上基本信息，我们来看下 chameleon 中的分包配置

### 1 app.cml中分包配置 

```javascript
"subPackages":[{
  "root":"pages/subpage", 
  "pages":[
      "page1/page1"
    ]
  },
  {
    "root":"subpage2",  
    "pages":[
      "page2/page2"
    ]
  }
]
```

以 微信端生成的目录结构为例 `dist/wx`，除了 subpage 和 subpage2 目录之外，剩余的都是算到主包的体积 

```javascript
.
├── app.js
├── app.json
├── app.wxss
├── components
│   ├── demo-com
│   ├── multi
│   └── origin-comp
├── npm
│   └── chameleon-ui-builtin
├── pages
│   ├── index
│   └── subpage   //这里的体积是分包的体积
├── static
│   ├── css
│   ├── img
│   └── js
└── subpage2      //这里的体积是分包的体积
    ├── components
    └── page2
```
建议：
* 如果不是公用组件，那么就将其放到分包文件夹下面，而不是全部都将组件声明在src/components中，具体参考项目中 src 中文件夹目录配置
* 为了有更好的目录结构，建议按照 subpage2 这样的目录结构进行分包的拆分，直观了当；

### 2 router.config.json 中的配置

```json
{
  "mode": "history",
  "domain": "https://www.chameleon.com",
  "routes":[
    {
      "url": "/cml/h5/index",
      "path": "/pages/index/index",
      "name": "首页",
      "mock": "index.php"
    },
    {
      "url": "/cml/h5/index1",
      "path": "/pages/subpage/page1/page1",
      "name": "分包1",
      "mock": "index.php"
    },
    {
      "url": "/cml/h5/index2",
      "path": "/subpage2/page2/page2",
      "name": "分包2",
      "mock": "index.php"
    }
  ]
}
```

如果在项目中所有的组件都是写在 `src/components` 中了，建议将分包页面用的组件拆分到对应的分包的目录下，比如 subpage2/componnets

经过以上配置，如果你原来的项目中所有组件都是在 `src/components`，那么经过这个优化过程之后，预期主包体积会减少 30% ~ 50%；


高阶配置：以下内容需要对webpack配置有一些了解

## webpack 配置优化

打包后的文件，我们可以发现 `dist/static/js/common.js` 这个文件是比较大的，这是因为所有公用的模块都会被打包进 common.js 中，所以分包文件夹下模块如果有公用的，也会被打到 common.js 中；

比如 `src/utils/utils.js` 这个模块，在 `src/subpage2/page2/page2.cml` 和 `src/pages/subpage/page1/page1.cml` 中都都有引入这个模块；

那么在 构建之后，在 `dist/wx/static/js/common.js`中搜索 `/utils/utils.js` 可以发现这个模块是被打包到这里了，也就是说仅仅分包的资源被打包到主包里了；


那么如何精确的控制模块的是否被打包进 common.js 中呢？

* 在项目中安装 `npm i webpack@3.12.0`
* 更改chameleon中关于小程序端的webpack配置

```javascript
cml.utils.plugin('webpackConfig', function(params) {
  let { type, media, webpackConfig } = params
  if (type === 'wx' || type === 'alipay' || type === 'baidu') {
    let index  = webpackConfig.plugins.findIndex(item => item.constructor.name === 'CommonsChunkPlugin')
    webpackConfig.plugins.splice(index, 1)
    webpackConfig.plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name: ['common','manifest'],
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
```

### 3 分包预加载

具体参考 [分包预加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)


```json
{
  "wx": {
    "window": {
      "backgroundTextStyle":"light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "Chameleon",
      "navigationBarTextStyle":"black"
    },
    "subPackages":[{
      "root":"pages/subpage",
      "pages":[
        "page1/page1"
      ]
    },
    {
      "root":"subpage2",
      "pages":[
        "page2/page2"
      ]
    }],
    "preloadRule": {
      "pages/index/index": { // 进入pages/index/index 这个页面会预加载 pages/subpage 这个分包资源
        "network": "all",
        "packages": ["pages/subpage"]
      },
      "pages/subpage/page1/page1": { //进入 /pages/subpage/page1/page1 这个页面会加载 subpage2 这个分包资源
        "network": "all",
        "packages": ["subpage2"]
      }
    }
  },
```