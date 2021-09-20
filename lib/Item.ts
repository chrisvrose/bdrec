import { localStorageKeys, LocalStorageWrapper } from './localStorageWrapper';

export enum ItemType {
    TEMP,
    OXY,
    PULSE,
    BP,
    SL,
}

/**
 * String representation of the entire ordeal
 */
export const itemTypeMap: { [k in ItemType]: string } = {
    [ItemType.TEMP]: 'Temperature',
    [ItemType.OXY]: 'Blood Oxygen Levels',
    [ItemType.PULSE]: 'Pulse',
    [ItemType.BP]: 'Blood Pressure',
    [ItemType.SL]: 'Blood Glucose',
};

/**
 * Convert Item type to string
 * @param x
 * @returns
 */
export function ItemTypeToString(x: ItemType) {
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

/** Format item for college */
export function ItemFormat(x: Item) {
    switch (x.itemType) {
        case ItemType.TEMP:
            const { unitString, num } = tempUnitConvert(x.value);
            return `${num} ${unitString}`;
        case ItemType.BP:
            return `${x.value} mm Hg.`;
        case ItemType.OXY:
            return `${x.value}% SpO2`;
        case ItemType.PULSE:
            return `${x.value} bpm`;
        case ItemType.SL:
            return `${x.value} mg/dl`;
    }
}

/** Item for IndexedDB */
export interface Item {
    itemType: ItemType;
    date: Date;
    value: number;
    desc: string;
}
/** Making an item */
export function Item(
    itemType: ItemType,
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
