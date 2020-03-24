import index from './index.interface';

export default function pay(opt = {}) {
  const noop = (res) => {};

  let {
    // 1.这里处理默认参数
    payParams = noop,
    success = noop,
    fail = noop,
    complete = noop
  } = opt;

  index.pay({
    payParams,
    success,
    fail,
    complete
  })
}
