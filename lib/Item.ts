export enum ItemType {
    TEMP,
    OXY,
    PULSE,
    HR,
}

/** Item for IndexedDB */
export class Item {
    constructor(public itemType: ItemType, public  date: Date=new Date(),public value:number=0, public desc:string=''){};
}
