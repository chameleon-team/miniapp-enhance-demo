module.exports = [
  {
    method: 'showToast',
    wxParam: [{
      name: 'title',
      type: 'String',
      default: ''
    }, {
      name: 'icon',
      type: 'String',
      default: 'none'
    }, {
      name: 'duration',
      type: 'Number',
      default: 1500
    }],
    aliasMap: {
      alipay: {
        // method: '', 方法别名
        // 参数别名
        param: {
          title: 'content',
          icon: 'type',
        }
      }
    }
  },
  {
    method: 'redirectTo', wxParam: [{
      name: 'url',
      type: 'String',
      default: ''
    }], aliasMap: {}
  },
  {
    method: 'navigateTo', wxParam: [{
      name: 'url',
      type: 'String',
      default: ''
    }], aliasMap: {}
  },
  {
    method: 'navigateBack', wxParam: [{
      name: 'delta',
      type: 'Number',
      default: 1
    }], aliasMap: {}
  },
  {
    method: 'setNavigationBarTitle', wxParam: [{
      name: 'title',
      type: 'String',
      default: ''
    }], aliasMap: {
      alipay: {
        method: 'setNavigationBar'
      }
    }
  },
  { method: 'getLocation', wxParam: [], aliasMap: {} },
  { method: 'reLaunch', wxParam: [
    {
      name: 'url',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'hideLoading', wxParam: [
    {
      name: 'page',
      type: 'CMLObject',
      default: {}
    },
  ], aliasMap: {} }, // 支付宝端某些场景需要传入page实例
  { method: 'showLoading', wxParam: [
    {
      name: 'title',
      type: 'string',
      default: ''
    },
  ], aliasMap: {
    alipay: {
      param: {
        title: 'content',
      }
    },
  } },
  { method: 'showModal', wxParam: [
    {
      name: 'title',
      type: 'string',
      default: ''
    },
    {
      name: 'content',
      type: 'string',
      default: ''
    },
    {
      name: 'cancelText',
      type: 'string',
      default: '取消'
    },
    {
      name: 'confirmText',
      type: 'string',
      default: '确定'
    },
  ], aliasMap: {
    alipay: {
      method: 'confirm',
      param: {
        cancelText: 'cancelButtonText',
        confirmText: 'confirmButtonText',
      }
    },
  } },
  // { method: 'getSystemInfoSync', wxParam: [], aliasMap: {} },
  { method: 'getSystemInfo', wxParam: [], aliasMap: {} },
  { method: 'createAnimation', wxParam: [
    {
      name: 'duration',
      type: 'number',
      default: 400
    },
    {
      name: 'timingFunction',
      type: 'string',
      default: 'linear'
    },
    {
      name: 'delay',
      type: 'number',
      default: 0
    },
    {
      name: 'transformOrigin',
      type: 'string',
      default: '50% 50% 0'
    },
  ], aliasMap: {} }, // 没有success
  // { method: 'request', wxParam: [], aliasMap: {} },
  { method: 'uploadFile', wxParam: [
    {
      name: 'url',
      type: 'string',
      default: ''
    },
    {
      name: 'filePath',
      type: 'string',
      default: ''
    },
    {
      name: 'name',
      type: 'string',
      default: ''
    },
    {
      name: 'fileType',
      type: 'string',
      default: ''
    },
    {
      name: 'header',
      type: 'CMLObject',
      default: {}
    },
    {
      name: 'formData',
      type: 'CMLObject',
      default: {}
    },
  ], aliasMap: {
    alipay: {
      param: {
        name: 'fileName'
      }
    }
  } },
  // { method: 'createMapContext', wxParam: [], aliasMap: {} }, // 入参不是Object
  // { method: 'MapContext', wxParam: [], aliasMap: {} }, // 入参不是Object
  { method: 'navigateToMiniProgram', wxParam: [
    {
      name: 'appId',
      type: 'string',
      default: ''
    },
    {
      name: 'path',
      type: 'string',
      default: ''
    },
    {
      name: 'extraData',
      type: 'CMLObject',
      default: ''
    },
    {
      name: 'envVersion',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  // { method: 'getUserInfo', wxParam: [], aliasMap: {} }, // 差异太大
  // { method: 'requestPayment', wxParam: [], aliasMap: {} }, // 差异太大
  { method: 'readBLECharacteristicValue', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'characteristicId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'onBLEConnectionStateChange', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  { method: 'onBLECharacteristicValueChange', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  { method: 'notifyBLECharacteristicValueChange', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'characteristicId',
      type: 'string',
      default: ''
    },
    {
      name: 'state',
      type: 'Boolean',
      default: false
    },
  ], aliasMap: {} },
  { method: 'getBLEDeviceServices', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'getBLEDeviceCharacteristics', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'createBLEConnection', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {
    alipay: {
      method: 'connectBLEDevice'
    }
  } }, //支付宝叫 connectBLEDevice
  { method: 'closeBLEConnection', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
  ], aliasMap: {
    alipay: {
      method: 'disconnectBLEDevice'
    }
  } }, // 支付宝叫 disconnectBLEDevice
  { method: 'writeBLECharacteristicValue', wxParam: [
    {
      name: 'deviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'serviceId',
      type: 'string',
      default: ''
    },
    {
      name: 'characteristicId',
      type: 'string',
      default: ''
    },
    {
      name: 'value',
      type: 'CMLObject',
      default: ''
    },
  ], aliasMap: {} },
  { method: 'stopBluetoothDevicesDiscovery', wxParam: [], aliasMap: {} },
  { method: 'startBluetoothDevicesDiscovery', wxParam: [
    {
      name: 'services',
      type: 'Array',
      default: []
    },
    {
      name: 'allowDuplicatesKey',
      type: 'Boolean',
      default: true
    },
    {
      name: 'interval',
      type: 'Number',
      default: ''
    },
  ], aliasMap: {} }, // 入参及回调有Array类型, 需要手动声明内部类型
  { method: 'openBluetoothAdapter', wxParam: [], aliasMap: {} },
  // { method: 'onBluetoothDeviceFound', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  // { method: 'onBluetoothAdapterStateChange', wxParam: [], aliasMap: {} }, // 只有一个回调函数作为入参 | 没有success/fail/complete
  // { method: 'getConnectedBluetoothDevices', wxParam: [], aliasMap: {} }, // 入参及回调有Array类型, 需要手动声明内部类型
  { method: 'getBluetoothDevices', wxParam: [], aliasMap: {} },
  { method: 'getBluetoothAdapterState', wxParam: [], aliasMap: {} },
  { method: 'closeBluetoothAdapter', wxParam: [], aliasMap: {} },
];