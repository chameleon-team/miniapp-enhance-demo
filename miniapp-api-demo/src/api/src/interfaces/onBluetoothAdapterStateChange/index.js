import index from './index.interface';

export default function onBluetoothAdapterStateChange(cb = () => {}) {
    index.onBluetoothAdapterStateChange(cb)
}
