import { FC } from "react";
import { Item } from "../lib/Item";

export const ItemView:FC<Item> = function({date,itemType,value,desc}){
    return <div>{date.toString()} {itemType} {value} {desc}</div>
}