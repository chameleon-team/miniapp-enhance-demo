import index from './index.interface';

export default function showToast(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        title = '',		icon = 'none',		duration = 1500,
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.showToast({
        // 2.这里把参数传进去
        title,		icon,		duration,
        success,
        fail,
        complete
    })
}
