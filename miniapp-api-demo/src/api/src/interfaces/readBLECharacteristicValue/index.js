import index from './index.interface';

export default function readBLECharacteristicValue(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        deviceId = '',		serviceId = '',		characteristicId = '',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.readBLECharacteristicValue({
        // 2.这里把参数传进去
        deviceId,		serviceId,		characteristicId,
        success,
        fail,
        complete
    })
}
