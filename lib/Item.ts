import { localStorageKeys, LocalStorageWrapper } from './db/localStorageWrapper';

export enum ItemType {
    TEMP,
    OXY,
    PULSE,
    SUGAR_LEVEL,
}

export const ENABLED_ITEMS = [ItemType.TEMP, ItemType.OXY, ItemType.PULSE, ItemType.SUGAR_LEVEL];

/**
 * String representation of the entire ordeal
 */
export const ITEM_TYPE_MAP: { [k in ItemType]: string } = {
    [ItemType.TEMP]: 'Temperature',
    [ItemType.OXY]: 'Blood Oxygen Level',
    [ItemType.PULSE]: 'Pulse',
    [ItemType.SUGAR_LEVEL]: 'Blood Glucose',
};

/**
 * Convert Item type to string
 * @param x
 * @returns
 */
export function itemTypeToString(x: ItemType) {
    return ITEM_TYPE_MAP[x];
}

export function tempUnitConvert(x: number) {
    const isCelcius = LocalStorageWrapper.getBoolean(localStorageKeys.tempIsCelcius);
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
 * Store temperature in a neutral format so it can be showed in C or F as required.
 * Stores it in 5*(temperature in Celcius).
 * @param x input number
 * @param isCelcius is celcius (true)
 */
function toTempMiddleFormat(x: number, isCelcius: boolean = true) {
    if (isCelcius) return x / 5;
    // fahrenheit
    return (x - 32) / 9;
}

/**
 * Normalize input values according to selected configuration.
 * @param item 
 * @returns 
 */
export function normalizeInputItem(item:Item){
    if(item.itemType===ItemType.TEMP){
        item.value = toTempMiddleFormat(item.value,LocalStorageWrapper.getBoolean(localStorageKeys.tempIsCelcius));
    }
    return item;
}
/**
 * Denormalize items from middleware config to raw input equivalent.
 * @param item 
 * @returns 
 */
export function denormalizeItem(item:Item):Item{
    const value = item.value;
    if(item.itemType==ItemType.TEMP){
        const {num: newValue} = tempUnitConvert(value)
        item.value = newValue;
    }
    return item;
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
        case ItemType.SUGAR_LEVEL:
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
