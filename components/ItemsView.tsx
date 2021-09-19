import { FC, useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item } from '../lib/Item';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from './ItemView';

export const ItemsView: FC = function () {
    const [x, setX] = useState(10);
    const { data, error, mutate } = useIDBFetcher(
        'getVal',
        true,
        undefined,
        x,
        { refreshInterval: 2000 }
    );

    let val;
    if (error) {
        val = <div>Error {error.toString()}</div>;
    }
    if (!data) {
        val = <div>Loading</div>;
    } else if ((data.length ?? 0) === 0) {
        val = <div>No data</div>;
    } else
        val = (
            <Accordion>
                {data.map((e) => (
                    <ItemView
                        key={JSON.stringify(e)}
                        {...e}
                        eventKey={JSON.stringify(e)}
                    />
                ))}
            </Accordion>
        );

    return (
        <>
            {val}
            <br />
            <Button
                onClick={(e) => {
                    IDBItemHandler.add(new Item(0));
                    mutate(undefined, true);
                }}
            >
                Add
            </Button>
            <br />

            <Button
                onClick={(e) => {
                    IDBItemHandler.clear();
                    mutate(undefined, true);
                }}
            >
                Clear
            </Button>
            <br />
        </>
    );
};
