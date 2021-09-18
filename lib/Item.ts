export enum ItemType {
    TEMP,
    OXY,
    PULSE,
    HR,
}

/** Item for IndexedDB */
export interface Item {
    itemType: ItemType, date: Date
}
export function Item(itemType: ItemType, date: Date):Item {return {itemType,date}}
export interface ItemWithDate extends Item {
        itemId:number;
}