import index from './index.interface';

export default function getBLEDeviceCharacteristics(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        deviceId = '',		serviceId = '',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.getBLEDeviceCharacteristics({
        // 2.这里把参数传进去
        deviceId,		serviceId,
        success,
        fail,
        complete
    })
}
