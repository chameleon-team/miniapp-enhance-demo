import index from './index.interface';

export default function createAnimation(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        duration = 400,		timingFunction = 'linear',		delay = 0,		transformOrigin = '50% 50% 0',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.createAnimation({
        // 2.这里把参数传进去
        duration,		timingFunction,		delay,		transformOrigin,
        success,
        fail,
        complete
    })
}
