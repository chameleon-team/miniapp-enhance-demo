import index from './index.interface';

export default function getConnectedBluetoothDevices(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        devices: [],
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.getConnectedBluetoothDevices({
        // 2.这里把参数传进去
        devices,
        success,
        fail,
        complete
    })
}
