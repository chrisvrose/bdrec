

export enum localStorageKeys{
    tempIsCelcius,
}

export class LocalStorageWrapper{
    /** Get with a fallback */
    static get<T extends string|null>(key:localStorageKeys,f:T):string|T{
        return localStorage.getItem(localStorageKeys[key])??f;
    }
    /** Put element in data */
    static put(k:string,v:string){
        return localStorage.setItem(k,v);
    }

    /** Clear all entries */
    static clear(){
        return localStorage.clear();
    }

}
