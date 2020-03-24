import index from './index.interface';

export default function onBluetoothDeviceFound(cb = () => {}) {
    index.onBluetoothDeviceFound(cb)
}
