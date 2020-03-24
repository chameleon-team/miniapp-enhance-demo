import index from './index.interface';

export default function notifyBLECharacteristicValueChange(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        deviceId = '',		serviceId = '',		characteristicId = '',		state = false,
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.notifyBLECharacteristicValueChange({
        // 2.这里把参数传进去
        deviceId,		serviceId,		characteristicId,		state,
        success,
        fail,
        complete
    })
}
