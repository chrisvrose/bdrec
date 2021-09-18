import { DBSchema, IDBPDatabase, IDBPObjectStore, openDB } from 'idb';
import { Item, ItemType, ItemWithDate } from './Item';

/**
 * Convenience wrapper type
 */
export interface ItemSchema extends DBSchema {
    [IDBItemHandler._collName]: {
        key: ItemWithDate[typeof IDBItemHandler._keyPath];
        value: ItemWithDate;
    };
}
/**
 * IndexedDB Wrapper using Item
 */
export class IDBItemHandler {
    /**Internal Reference */
    private _db:IDBPDatabase<ItemSchema>|null;


    public get db(): Promise<IDBPDatabase<ItemSchema>>{
        return this.createIfNotExists();
    };
    public static readonly _dbName = 'vir';
    public static readonly _collName = 'readings';
    // index to use.
    public static readonly _keyPath = 'itemId';
    constructor(private _dbVersion: number = 1) {
        this._db = null;
    }

    public get dbVersion(): number {
        return this._dbVersion;
    }
    private async createIfNotExists() {
        //get the db first
        const dbStore =
            this._db ??
            (await openDB(IDBItemHandler._dbName, this._dbVersion, {
                upgrade: (db, oldv, newv, transaction) => {
                    // create a collection if it doesnt exist
                    if (!db.objectStoreNames.contains(IDBItemHandler._collName)) {
                        db.createObjectStore(IDBItemHandler._collName, {
                            keyPath: IDBItemHandler._keyPath,autoIncrement:true
                        });
                    }
                }
            }));

        return dbStore;
    }
    
    async put(jsonObject: Item) {
        const db = await this.db;
        return db.add(IDBItemHandler._collName, jsonObject as any);
    }

    async get(x: ItemWithDate[typeof IDBItemHandler._keyPath]) {
        const db = await this.db;

        return db.get(IDBItemHandler._collName, x);
    }

    async getAll() {
        const db = await this.db;

        return db.getAll(IDBItemHandler._collName, undefined);
    }
}

/**
 * Classical exception
 */
export class DBException {
    constructor(
        private msg: string,
        private typeException: 'E' | 'W' | 'I' | '?' = 'E'
    ) {}
    toString() {
        return this.typeException + ':' + this.msg;
    }
}
