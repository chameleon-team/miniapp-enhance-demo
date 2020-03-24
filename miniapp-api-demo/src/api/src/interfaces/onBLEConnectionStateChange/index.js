import index from './index.interface';

export default function onBLEConnectionStateChange(cb = () => {}) {
    index.onBLEConnectionStateChange(cb)
}
