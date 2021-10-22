/** Nice date time formatting options */
export const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
};

export const pageSizes = 15;
export interface DataUpdater{
    updateData:()=>Promise<void>;
}
