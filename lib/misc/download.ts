import {saveAs} from 'file-saver';
export function downloadStringAsFile(str:string, fname: string){
    const blob = new Blob([str]);
    saveAs(blob,fname,{autoBom:true});
}