import index from './index.interface';

export default function getLocation(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        type = 'wgs84',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.getLocation({
        // 2.这里把参数传进去
        type,
        success,
        fail,
        complete
    })
}
