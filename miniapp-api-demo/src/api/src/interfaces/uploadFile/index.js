import index from './index.interface';

export default function uploadFile(opt = {}) {
    const noop = (res) => {
    };

    let {
        // 1.这里处理默认参数
        url = '',
		filePath = '',
		name = '',
		fileType = 'image',
		header = {},
		formData = {},
        success = noop,
        fail = noop,
        complete = noop
    } = opt;

    index.uploadFile({
        // 2.这里把参数传进去
        url,
		filePath,
		name,
		fileType,
		header,
		formData,
        success,
        fail,
        complete
    })
}
