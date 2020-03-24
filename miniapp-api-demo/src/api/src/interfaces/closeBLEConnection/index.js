import index from './index.interface';

export default function closeBLEConnection(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        deviceId = '',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.closeBLEConnection({
        // 2.这里把参数传进去
        deviceId,
        success,
        fail,
        complete
    })
}
