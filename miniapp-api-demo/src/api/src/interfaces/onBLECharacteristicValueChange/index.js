import index from './index.interface';

export default function onBLECharacteristicValueChange(cb = (res) => {}) {
    index.onBLECharacteristicValueChange(cb)
}
