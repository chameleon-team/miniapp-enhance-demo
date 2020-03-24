import index from './index.interface';

export default function getBluetoothDevices(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.getBluetoothDevices({
        // 2.这里把参数传进去
        
        success,
        fail,
        complete
    })
}
