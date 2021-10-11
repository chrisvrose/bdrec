import type { FC, ReactChild } from 'react';
import { useState } from 'react';
import {
    Accordion,
    Button,
    ButtonGroup,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Modal,
    Row,
} from 'react-bootstrap';
import { pageSizes } from '../lib/constants';
import { IDBItemHandler } from '../lib/idbWrapper';
import { Item, ItemType, itemTypeMap } from '../lib/Item';
import { useIDBFetcher } from '../lib/miscSwr';
import { ItemView } from './ItemView';
import Link from 'next/link';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export const ItemsView: FC = function () {
    const { data, error, mutate } = useIDBFetcher(
        'getVal',
        true,
        undefined,
        pageSizes,
        { refreshInterval: 2000 }
    );
    const updateData = () => mutate(undefined, true);

    const [showClearModal, setShowClearModal] = useState(false);
    const confirmClear = async () => {
        try {
            await IDBItemHandler.clear();
            updateData();
            setShowClearModal(false);
        } catch (e) {
            console.log('Failed to clear', e);
        }
    };

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
            <Row style={{ textAlign: 'center' }} md={8}>
                <Col md={{ span: 6, offset: 3 }}>
                    <ButtonGroup
                        aria-label="Buttons"
                        className="full-width spacer-top-margin"
                    >
                        {/* <Button onClick={()=>{}}>Add</Button> */}
                        {/* <Button
                            onClick={() => {
                                IDBItemHandler.add(Item(0));
                                updateData();
                            }}
                        >
                            Add
                        </Button> */}
                        <DropdownButton as={ButtonGroup} title="Add" >
                            {/* <Dropdown.Item eventKey="1">Temperature</Dropdown.Item> */}
                            <Dropdown.Item eventKey="1" onClick={()=>{IDBItemHandler.add(Item(ItemType.TEMP,undefined,undefined,'no'))}}>{itemTypeMap[ItemType.TEMP]}</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={()=>{IDBItemHandler.add(Item(ItemType.OXY,undefined,98 ,'no'))}}>{itemTypeMap[ItemType.OXY]}</Dropdown.Item>
                        </DropdownButton>
                        {/* <br /> */}
                        <Button onClick={()=>updateData()}>Refresh </Button>
                        <Button onClick={() => setShowClearModal(true)}>
                            Clear
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Modal
                show={showClearModal}
                onHide={() => setShowClearModal(false)}
            >
                <Modal.Header>Clear?</Modal.Header>
                <Modal.Body>Confirm Clearing all entries?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowClearModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmClear}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            
            <br />

            {dataFragment}


            
        </>
    );
};
