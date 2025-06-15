import { DBSchema, IDBPDatabase, openDB } from 'idb';
import { Item } from '../Item';
/**
 * Convenience wrapper type
 */
export interface ItemSchema extends DBSchema {
    [IDBItemHandler.COLLECTION_NAME]: {
        key: Item[typeof IDBItemHandler.COLLECTION_INDEX_KEY_NAME];
        value: Item;
    };
}

/**
 * IndexedDB Wrapper using Item
 */
export class IDBItemHandler {
    public static readonly DB_NAME = 'vir';
    public static readonly COLLECTION_NAME = 'readings';
    /* index to use. */
    public static readonly COLLECTION_INDEX_KEY_NAME = 'date';

    /**Internal Reference (lazily created) do not use directly */
    private static _db: IDBPDatabase<ItemSchema> | null = null;

    /** create db instance lazily , use this to get db */
    private static get db(): Promise<IDBPDatabase<ItemSchema>> {
        return this.createDbIfNotExists();
    }

    /** Create Database if not exists and set the this._db var */
    private static async createDbIfNotExists() {
        //get the db first
        const dbStore =
            IDBItemHandler._db ??
            (await openDB(IDBItemHandler.DB_NAME, 1, {
                upgrade: (db, oldVersion, newVersion, transaction) => {
                    // create a collection if it doesnt exist
                    if (!db.objectStoreNames.contains(IDBItemHandler.COLLECTION_NAME)) {
                        db.createObjectStore(IDBItemHandler.COLLECTION_NAME, {
                            keyPath: IDBItemHandler.COLLECTION_INDEX_KEY_NAME,
                        });
                    }
                }
            }));

        return dbStore;
    }

    /**
     * Insert an item
     * @param jsonObject
     * @returns
     */
    static async add(jsonObject: Item) {
        const db = await this.db;
        return db.add(IDBItemHandler.COLLECTION_NAME, jsonObject as any);
    }
    /**
     * Edit an existing value
     * @param key
     * @param item
     * @returns New index date
     */
    static async edit(key: Item[typeof IDBItemHandler.COLLECTION_INDEX_KEY_NAME] | undefined, item: Item) {
        const db = await this.db;
        return db.put(IDBItemHandler.COLLECTION_NAME, item, key);
    }

    /**
     * Get item in db as per key
     * @param x
     * @returns
     */
    static async get(x: Item[typeof IDBItemHandler.COLLECTION_INDEX_KEY_NAME]) {
        const db = await this.db;
        return db.get(IDBItemHandler.COLLECTION_NAME, x);
    }

    /**
     * Get all items
     * @returns all items in db
     */
    static async getAll() {
        const db = await this.db;

        return db.getAll(IDBItemHandler.COLLECTION_NAME, undefined);
    }

    /**
     * Get Only a specified list of elements from the array
     * @param from From index position
     * @param length Number of items to return
     * @returns set of items
     */
    static async getFromOffset(from: number, length?: number, reverse: boolean = false) {
        // create a transaction
        const transaction = (await this.db).transaction(IDBItemHandler.COLLECTION_NAME, 'readonly');
        // open a cursor for streamed reading (open reverse if arg is true)
        let cursor = await transaction.store.openCursor(undefined, reverse ? 'prev' : 'next');

        // advance scroll and set it (if already empty its forwarded to null)
        // do this only for positive ints
        if (from > 0) cursor = (await cursor?.advance(from)) ?? null;

        // number of items processed
        let i = 0;
        const items: Item[] = [];
        // skip length check if undefined -> this will allow for getting all items from there, no length limit
        while (cursor && (length === undefined || i < length)) {
            items.push(cursor.value);
            i++;
            cursor = await cursor.continue();
        }
        //close it
        transaction.commit();
        return items;
    }
    /**
     * Number of readings in the store
     * @returns count of elements
     */
    static async getCount() {
        const db = await this.db;
        return db.count(IDBItemHandler.COLLECTION_NAME);
    }
    /**
     * Clears out all store entries
     * @returns nothing
     */
    static async clear() {
        const db = await this.db;
        return db.clear(IDBItemHandler.COLLECTION_NAME);
    }
    /**
     * Delete entry at given date
     * @param k Date
     * @returns
     */
    static async delete(k: Item[typeof IDBItemHandler.COLLECTION_INDEX_KEY_NAME]) {
        const db = await this.db;
        return db.delete(IDBItemHandler.COLLECTION_NAME, k);
    }
}

/**
 * DB Related error.
 */
export class DBException {
    constructor(private msg: string, private typeException: 'E' | 'W' | 'I' | '?' = 'E') {}
    toString() {
        return this.typeException + ':' + this.msg;
    }
}
