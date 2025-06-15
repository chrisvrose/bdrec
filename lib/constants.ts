import { ItemType, itemTypeToString } from './Item';

/** Nice date time formatting options */
export const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    // year: 'numeric',
    // month: 'short',
    // day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    dateStyle: 'short',
    timeStyle: 'short'
};

export const pageSizes = 15;

type FormStringsType = {[k in ItemType]:{addFormHeadingText:string,addLabel:string,addPlaceHolder: string}};

export const formStrings:FormStringsType = {
    [ItemType.OXY]: {
        addFormHeadingText: 'Add Oxygen reading',
        addLabel: 'SpO2 reading (%)',
        addPlaceHolder: itemTypeToString(ItemType.OXY),
    },
    [ItemType.TEMP]: {
        addFormHeadingText: 'Add Temperature reading',
        addLabel: 'Temperature reading',
        addPlaceHolder: itemTypeToString(ItemType.TEMP),
    },
    [ItemType.PULSE]: {
        addFormHeadingText: 'Add Pulse Reading',
        addLabel: 'Pulse Reading (bpm)',
        addPlaceHolder: itemTypeToString(ItemType.PULSE),
    },
    [ItemType.SUGAR_LEVEL]: {
        addFormHeadingText: 'Add Blood Sugar Reading',
        addLabel: 'Blood Sugar levels (mg/dl)',
        addPlaceHolder: itemTypeToString(ItemType.SUGAR_LEVEL),
    },
};

const formConfig = {
    inputValueStep: {
        [ItemType.TEMP]: 0.01,
        [ItemType.OXY]: 1,
        [ItemType.SUGAR_LEVEL]: 1,
        [ItemType.PULSE]: 1,
    },
    inputValueMax:{
        [ItemType.TEMP]: 150,
        [ItemType.OXY]: 100,
        [ItemType.SUGAR_LEVEL]: 300,
        [ItemType.PULSE]: 300,
    }
};

export function getFormConfig(type: ItemType, configName: keyof typeof formConfig): number {
    return formConfig[configName][type];
}
