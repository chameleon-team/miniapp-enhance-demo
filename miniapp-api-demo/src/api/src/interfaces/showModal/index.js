import index from './index.interface';

export default function showModal(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        title = '',		content = '',		cancelText = '取消',		confirmText = '确定',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.showModal({
        // 2.这里把参数传进去
        title,		content,		cancelText,		confirmText,
        success,
        fail,
        complete
    })
}
