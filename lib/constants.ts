import { ItemType, itemTypeToString } from './Item';

/** Nice date time formatting options */
export const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
};

export const pageSizes = 15;

export const formStrings = {
    [ItemType.OXY]: {
        addButtonText: 'Add Oxygen reading',
        addLabel: 'SpO2 reading',
        addPlaceHolder: itemTypeToString(ItemType.OXY),
    },
    [ItemType.TEMP]: {
        addButtonText: 'Add Temperature reading',
        addLabel: 'Temperature reading',
        addPlaceHolder: itemTypeToString(ItemType.TEMP),
    },
    [ItemType.PULSE]: {
        addButtonText: 'Add Pulse Reading',
        addLabel: '',
        addPlaceHolder: itemTypeToString(ItemType.PULSE),
    },
    [ItemType.SL]: {
        addButtonText: 'Add Blood Sugar Reading',
        addLabel: '',
        addPlaceHolder: itemTypeToString(ItemType.SL),
    },
};

const formConfig = {
    inputValueStep: {
        [ItemType.TEMP]: 0.1,
        [ItemType.OXY]: 1,
        [ItemType.SL]: 1,
        [ItemType.PULSE]: 1,
    },
    inputValueMax:{
        [ItemType.TEMP]: 150,
        [ItemType.OXY]: 100,
        [ItemType.SL]: 300,
        [ItemType.PULSE]: 300,
    }
};

export function getFormConfig(type: ItemType, configName: keyof typeof formConfig): number {
    return formConfig[configName][type];
}
