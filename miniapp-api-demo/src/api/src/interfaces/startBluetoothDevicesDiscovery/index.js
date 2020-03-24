import index from './index.interface';

export default function startBluetoothDevicesDiscovery(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        services = [],
		allowDuplicatesKey = true,
		interval = 0,
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.startBluetoothDevicesDiscovery({
        // 2.这里把参数传进去
        services,
		allowDuplicatesKey,
		interval,
        success,
        fail,
        complete
    })
}
