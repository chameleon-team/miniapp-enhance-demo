import index from './index.interface';

export default function showActionSheet(opt = {}) {
    const noop = (res) => {};
    let {
        itemList = [],
            success = noop,
            fail = noop,
            complete = noop
    } = opt;
    let ary = [];
    itemList.forEach(element => {
        ary.push(element);
    });
    index.showActionSheet({
        // 2.这里把参数传进去
        itemList: ary,
        success,
        fail,
        complete
    })
}