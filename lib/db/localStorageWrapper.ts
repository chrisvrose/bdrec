

export enum localStorageKeys {
    tempIsCelcius,
}

/**
 * Store and manage in local storage.
 * 
 */
export class LocalStorageWrapper{
    /**
     * Convenience method - put a boolean into local storage.
     * Represented internally as String(boolean).
     * @param key Key name
     * @param fallBack Fallback value
     * @returns void
     */
    static getBoolean(key:localStorageKeys,fallBack: boolean = false):boolean{
        const keyValueString = this.get(key,String(fallBack));
        return keyValueString === 'true';
    }


    /**
     * Convenience method - put a boolean into local storage
     * @param key 
     * @param v 
     * @returns void
     */
    static putBoolean(key: localStorageKeys, v: boolean){
        return this.put(key,String(v));
    }

    /** Get with a fallback */
    private static get<T extends string|null>(key:localStorageKeys,f:T):string|T{
        return localStorage.getItem(localStorageKeys[key])??f;
    }
    /** Put element in data */
    private static put(k:localStorageKeys,v:string){
        return localStorage.setItem(localStorageKeys[k],v);
    }

    /** Clear all entries */
    static clear(){
        return localStorage.clear();
    }

}
