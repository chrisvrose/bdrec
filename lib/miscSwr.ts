import useSWR from "swr";
import { IDBItemHandler } from "./idbWrapper";

export function keyMaker(x:string,reverse:boolean=false,y:number,z?:number){
    return `${x}:${y}:${z??''}:${reverse}`
}

function keySplitter(x:string):[string,number,number?]{
    const data =  x.split(':');
    return [data[0],parseInt(data[1]),data[2]!==undefined?parseInt(data[2]):undefined]
}


/**
 * Wrapper around SWR to fetch IDB Items
 * @param key 
 * @param offset 
 * @param length 
 * @param options 
 * @returns 
 */
export function useIDBFetcher(key:string,reverse:boolean=false,offset:number=0,length?:number,options?:Partial<{dedupingInterval:number,errorRetryCount:number,refreshInterval:number,refreshWhenHidden:boolean,revalidateOnFocus:boolean}>){
    const fetcher =  useSWR(keyMaker(key,reverse,offset,length),()=>{
        return IDBItemHandler.getFromOffset(offset,length,reverse);
    },options);
    return fetcher;
}