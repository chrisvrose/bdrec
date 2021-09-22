import type { FC, ReactChild } from 'react';
import { useState } from 'react';
import { Accordion, Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { pageSizes } from '../lib/constants';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item } from '../lib/Item';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from './ItemView';
import Link from 'next/link';

export const ItemsView: FC = function () {
    const { data, error, mutate } = useIDBFetcher(
        'getVal',
        true,
        undefined,
        pageSizes,
        { refreshInterval: 2000 }
    );
    const updateData = () => mutate(undefined, true);

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

            <Row style={{ textAlign: 'center' }} md={8}>
                <Col md={{span: 6,offset:3}}>
                    <ButtonGroup
                        aria-label="Buttons"
                        className="full-width spacer-top-margin"
                    >
                        {/* <Button onClick={()=>{}}>Add</Button> */}
                        <Button
                            onClick={() => {
                                IDBItemHandler.add(Item(0));
                                updateData();
                            }}
                        >
                            Add
                        </Button>
                        {/* <br /> */}

                        <Button
                            onClick={() => {
                                IDBItemHandler.clear();
                                updateData();
                            }}
                        >
                            Clear
                        </Button>

                    </ButtonGroup>
                </Col>
            </Row>
            
        </>
    );
};
