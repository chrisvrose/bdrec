import type { FC, ReactChild } from 'react';
import { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { pageSizes } from '../lib/constants';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item } from '../lib/Item';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from './ItemView';

export const ItemsView: FC = function () {
    const { data, error, mutate } = useIDBFetcher(
        'getVal',
        true,
        undefined,
        pageSizes,
        { refreshInterval: 2000 }
    );

    let dataFragment: ReactChild;
    if (error) {
        dataFragment = <div>Error {error.toString()}</div>;
    } else if (!data) {
        dataFragment = <div>Loading</div>;
    } else if ((data.length ?? 0) === 0) {
        dataFragment = <div>No data (Add an entry)</div>;
    } else
        dataFragment = (
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
            {dataFragment}

            <br />
            <Button
                onClick={(e) => {
                    IDBItemHandler.add(Item(0));
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
