import index from './index.interface';

export default function hideLoading(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        page = {},
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.hideLoading({
        // 2.这里把参数传进去
        page,
        success,
        fail,
        complete
    })
}
