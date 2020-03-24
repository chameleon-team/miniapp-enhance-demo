import index from './index.interface';

export default function navigateTo(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        url = '',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.navigateTo({
        // 2.这里把参数传进去
        url,
        success,
        fail,
        complete
    })
}
