var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var methods = require('./methods.js');

// 文件和路径
var projectRoot = process.cwd();
var apiInterfacesPath = path.join(projectRoot, './src/api/src/interfaces');
var templatePath = path.join(projectRoot, './make/apiTemplate');

// 处理
methods.forEach(item => {
  var method = item.method;
  var methodPath = path.join(apiInterfacesPath, method);

  try {
    // 复制一份方法文件夹
    fse.copySync(templatePath, methodPath);
    // 替换${method}处为方法名
    relacePlaceholder(path.join(methodPath, './index.js'), method);
    relacePlaceholder(path.join(methodPath, './index.interface'), method);
    // 替换index.js里的默认参数
    relacewWxParam(path.join(methodPath, './index.js'), item);
    // 处理interface里的参数type
    relaceParamTypeInterface(path.join(methodPath, './index.interface'), item);
    // 处理interface里各端的结构出的参数
    relaceParamCrossInterface(path.join(methodPath, './index.interface'), item);
  } catch (e) {
    console.log(e);
  }
})

/**
 * 替换文件占位符内容
 * @param {String} filePath 文件路径
 * @param {String} method 方法名
 */
function relacePlaceholder(filePath, method) {
  var content = fs.readFileSync(filePath).toString('utf8');
  content = content.replace(/\$\{method\}/g, method);
  fs.writeFileSync(filePath, content, 'utf8', function (err) {
    if (err) return console.log(err);
  });
}

/**
 * 处理index.js里的参数
 * @param {String} filePath 文件路径
 * @param {Object} item 数据
 */
function relacewWxParam(filePath, item) {
  var wxParam = item.wxParam;
  var content = fs.readFileSync(filePath).toString('utf8');

  // 处理解构默认值
  var wxParamDefaultText = ``;
  wxParam.forEach((p, i) => {
    var defaultValue = p.default;
    if (typeof defaultValue == 'string') {
      if (!defaultValue) {
        defaultValue = `''`;
      } else {
        defaultValue = `\'${defaultValue}\'`;
      }
    }

    if (typeof defaultValue == 'object') {
      defaultValue = JSON.stringify(defaultValue);
    }

    lastFH = i == wxParam.length - 1 ? '' : '\r\t\t'
    wxParamDefaultText = wxParamDefaultText + `${p.name} = ${defaultValue},${lastFH}`;
  })
  content = content.replace(/\$\{wxParamWithValue\}/g, wxParamDefaultText);

  // 传递解构默认值
  var wxParamNameText = ``;
  wxParam.forEach((p, i) => {
    lastFH = i == wxParam.length - 1 ? '' : '\r\t\t'
    wxParamNameText = wxParamNameText + `${p.name},${lastFH}`;
  })
  content = content.replace(/\$\{wxParamOnlyName\}/g, wxParamNameText);

  fs.writeFileSync(filePath, content, 'utf8', function (err) {
    if (err) return console.log(err);
  });
}

/**
 * 处理index.interface里的参数
 * @param {String} filePath 文件路径
 * @param {Object} item 数据
 */
function relaceParamTypeInterface(filePath, item) {
  var wxParam = item.wxParam;
  var content = fs.readFileSync(filePath).toString('utf8');

  // 处理interface处的参数和类型
  var wxParamIFTypeText = ``;
  wxParam.forEach((p, i) => {
    var type = p.type;
    lastFH = i == wxParam.length - 1 ? '' : '\r\t\t'
    wxParamIFTypeText = wxParamIFTypeText + `${p.name}: ${type},${lastFH}`;
  })
  content = content.replace(/\$\{paramInterfaceType\}/g, wxParamIFTypeText);

  fs.writeFileSync(filePath, content, 'utf8', function (err) {
    if (err) return console.log(err);
  });
}

/**
 * 处理interface文件里各端情况
 * @param {String} filePath 文件路径
 * @param {Object} item 数据
 */
function relaceParamCrossInterface(filePath, item) {
  var wxParam = item.wxParam;
  var content = fs.readFileSync(filePath).toString('utf8');

  // 处理结构默认参数
  var wxParamNameText = ``;
  wxParam.forEach((p, i) => {
    lastFH = i == wxParam.length - 1 ? '' : '\r\t\t\t\t'
    wxParamNameText = wxParamNameText + `${p.name},${lastFH}`;
  })
  content = content.replace(/\$\{wxParamOnlyName\}/g, wxParamNameText);

  fs.writeFileSync(filePath, content, 'utf8', function (err) {
    if (err) return console.log(err);
  });

  // 处理方法别名和参数别名
  var aliasMap = item.aliasMap;
  if (!aliasMap || !Object.keys(aliasMap).length) {
    content = content.replace(/\$\{paramAlias_.+}/g, wxParamNameText);
  } else {
    Object.keys(aliasMap).forEach(key => {
      var paramAliasMap = aliasMap[key].param;
      if (paramAliasMap) {
        var paramAliasText = ``;
        wxParam.forEach((p, i) => {
          lastFH = i == wxParam.length - 1 ? '' : '\r\t\t\t\t'
          if (paramAliasMap[p.name]) {
            paramAliasText = paramAliasText + `${paramAliasMap[p.name]}: ${p.name},${lastFH}`;
          } else {
            paramAliasText = paramAliasText + `${p.name},${lastFH}`;
          }
        })
        var reg = new RegExp(`\\$\\{paramAlias_${key}\\}`, 'g');
        content = content.replace(reg, paramAliasText);
      }

      // 替换方法别名
      var aliasMethodName = aliasMap[key].method;
      if (aliasMethodName) {
        var endNSMap = {
          wx: 'wx',
          alipay: 'my'
        }
        var regNS = new RegExp(`${endNSMap[key]}\\.\.+\\(\\{`, 'g');
        content = content.replace(regNS, `${endNSMap[key]}.${aliasMethodName}({`);
      }
    });

    // 兼容没有配置其他端的参数
    content = content.replace(/\$\{paramAlias_.+}/g, wxParamNameText);
  }

  fs.writeFileSync(filePath, content, 'utf8', function (err) {
    if (err) return console.log(err);
  });
}





