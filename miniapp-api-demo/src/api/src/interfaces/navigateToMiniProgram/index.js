import index from './index.interface';

export default function navigateToMiniProgram(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        appId = '',
		path = '',
		extraData = {},
		envVersion = '',
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.navigateToMiniProgram({
        // 2.这里把参数传进去
        appId,
		path,
		extraData,
		envVersion,
        success,
        fail,
        complete
    })
}
