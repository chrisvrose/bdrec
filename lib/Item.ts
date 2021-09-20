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
export const itemTypeMap:{[k in ItemType]:string} = {
    [ItemType.TEMP]:'Temperature',
    [ItemType.OXY]:'Blood Oxygen Levels',
    [ItemType.PULSE]:'Pulse',
    [ItemType.BP]:'Blood Pressure',
    [ItemType.SL]:'Blood Glucose'
}

/**
 * Convert Item type to string
 * @param x 
 * @returns 
 */
export function ItemTypeToString(x:ItemType){
    return itemTypeMap[x];
}

/** Item for IndexedDB */
export class Item {
    constructor(public itemType: ItemType, public  date: Date=new Date(),public value:number=0, public desc:string=''){};
}

