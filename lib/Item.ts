import { localStorageKeys, LocalStorageWrapper } from './db/localStorageWrapper';

export enum ItemType {
    TEMP,
    OXY,
    PULSE,
    SL,
}

/**
 * String representation of the entire ordeal
 */
const itemTypeMap: { [k in ItemType]: string } = {
    [ItemType.TEMP]: 'Temperature',
    [ItemType.OXY]: 'Blood Oxygen Level',
    [ItemType.PULSE]: 'Pulse',
    [ItemType.SL]: 'Blood Glucose',
};

/**
 * Convert Item type to string
 * @param x
 * @returns
 */
export function itemTypeToString(x: ItemType) {
    return itemTypeMap[x];
}

export function tempUnitConvert(x: number) {
    const isCelcius =
        LocalStorageWrapper.get(localStorageKeys.tempIsCelcius, 'no') === 'yes';
    return isCelcius
        ? {
              unitString: ' °C',
              num: 5 * x,
          }
        : {
              unitString: ' °F',
              num: 9 * x + 32,
          };
}
/**
 *
 * @param x input number
 * @param isCelcius is celcius (true)
 */
export function toTempMiddleFormat(x: number, isCelcius: boolean = true) {
    if (isCelcius) return x / 5;
    // for fahrenheit
    else return (x - 32) / 9;
}

/** Format item value */
export function ItemValueFormat(x: Item) {
    switch (x.itemType) {
        case ItemType.TEMP: {
            const { unitString, num } = tempUnitConvert(x.value);
            return `${num.toFixed(2)} ${unitString}`;
        }
        case ItemType.OXY:
            return `${x.value}% SpO2`;
        case ItemType.PULSE:
            return `${x.value} bpm`;
        case ItemType.SL:
            return `${x.value} mg/dl`;
    }
}

/** Item for IndexedDB */
export type Item = {
    itemType: ItemType;
    date: Date;
    value: number;
    desc: string;
};
/** Making an item */
export function Item(
    itemType: ItemType = ItemType.TEMP,
    date: Date = new Date(),
    value: number = 0,
    desc: string = ''
) {
    return {
        itemType,
        date,
        value,
        desc,
    };
}
