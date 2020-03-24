import index from './index.interface';

export default function navigateBack(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        delta = 1,
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.navigateBack({
        // 2.这里把参数传进去
        delta,
        success,
        fail,
        complete
    })
}
